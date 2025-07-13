import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Edit, Globe, FileClock } from "lucide-react";
import Link from "next/link";
import { BlogActions } from "@/components/admin/blog-actions";
import ConvexClientProvider from "@/components/providers/convex-provider";
import { Id } from "@/convex/_generated/dataModel";
import { formatDistanceToNow, format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Define function to fetch blog data
async function getBlogById(id: Id<"blogs">) {
  try {
    // Since this is a server component, we need to use the Convex HTTP API
    // For now, we'll return a stub for demo purposes
    return {
      _id: id,
      title: "Sample Blog",
      content: "<p>Sample content for the blog</p>",
      userId: "",
      userName: "",
      imageUrl: "",
      published: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Define params type for the page
interface BlogViewPageParams {
  params: {
    blogId: string;
  };
}

export default async function BlogViewPage({ params }: BlogViewPageParams) {
  const authData = await auth();
  const { userId } = authData;

  if (!userId) {
    redirect("/auth/sign-in");
  }

  // Convert the string blogId to a proper Convex ID format
  const blogId = params.blogId as Id<"blogs">;

  // Server-side fetch of the blog data
  const blog = await getBlogById(blogId);

  if (!blog) {
    return (
      <div className="p-8">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/admin/dashboard/blogs">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Link>
          </Button>
        </div>

        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you are looking for does not exist or has been
            deleted.
          </p>
          <Button asChild>
            <Link href="/admin/dashboard/blogs">Return to Blogs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link href="/admin/dashboard/blogs">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{blog.title}</h1>
        </div>

        <ConvexClientProvider>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={`/admin/dashboard/blogs/${blogId}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            <BlogActions blogId={blogId} />
          </div>
        </ConvexClientProvider>
      </div>

      <div className="bg-card p-8 rounded-lg border shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <FileClock className="h-4 w-4 mr-1" />
                <span>Created {format(blog.createdAt, "PPP")}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <span>
                  Last updated{" "}
                  {formatDistanceToNow(blog.updatedAt, { addSuffix: true })}
                </span>
              </div>
            </div>
          </div>
          <Badge
            variant={blog.published ? "default" : "outline"}
            className="text-sm"
          >
            {blog.published ? "Published" : "Draft"}
          </Badge>
        </div>

        <Separator className="my-6" />

        {blog.imageUrl && (
          <div className="mb-6">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose max-w-none">
          {/* Render the content with proper formatting */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
}
