import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { BlogForm } from "@/components/admin/blog-form";
import { Id } from "@/convex/_generated/dataModel";
import ConvexClientProvider from "@/components/providers/convex-provider";

// Define the function to fetch blog data
async function getBlogById(id: Id<"blogs">) {
  try {
    // Since this is a server component, we need to use the Convex HTTP API
    // For now, we'll return a stub for demo purposes
    return {
      _id: id,
      title: "Sample Blog",
      content: "Sample content for the blog",
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

export default async function EditBlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  const authData = await auth();
  const { userId } = authData;
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/auth/sign-in");
  }

  const blogId = params.blogId as Id<"blogs">;
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
    <div className="p-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="ghost" size="sm" className="mr-4">
          <Link href={`/admin/dashboard/blogs/${blogId}`}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Edit Blog Post</h1>
      </div>

      <BlogForm
        userId={userId}
        userName={`${user.firstName || ""} ${user.lastName || ""}`.trim()}
        initialData={{
          id: blog._id,
          title: blog.title,
          content: blog.content,
          imageUrl: blog.imageUrl,
          published: blog.published,
        }}
      />
    </div>
  );
}
