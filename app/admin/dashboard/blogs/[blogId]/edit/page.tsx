import { AdminSidebar } from "@/components/admin/sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BlogForm } from "@/components/admin/blog-form";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

// Define the function to fetch blog data
async function getBlogById(id: string) {
  try {
    // Since this is a server component, we need to use the Convex HTTP API
    // For now, we'll return a stub, but in a real app you'd use fetch to the Convex API
    return {
      _id: id as Id<"blogs">,
      title: "Loading...",
      content: "Loading...",
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

  const blogId = params.blogId;
  const blogData = await getBlogById(blogId);

  if (!blogData) {
    redirect("/admin/dashboard/blogs");
  }

  return (
    <div className="flex h-screen bg-muted/20">
      <div className="w-64 h-full">
        <AdminSidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Edit Blog</h1>
          <p className="text-muted-foreground">
            Make changes to your blog post
          </p>
        </div>

        <BlogClientWrapper
          userId={userId}
          userName={`${user.firstName || ""} ${user.lastName || ""}`.trim()}
          blogId={blogId}
        />
      </div>
    </div>
  );
}

// Client component wrapper to handle Convex queries
("use client");

import { useQuery } from "convex/react";
import { Skeleton } from "@/components/ui/skeleton";
import ConvexClientProvider from "@/components/providers/convex-provider";

function BlogClientWrapper({
  userId,
  userName,
  blogId,
}: {
  userId: string;
  userName: string;
  blogId: string;
}) {
  return (
    <ConvexClientProvider>
      <BlogContent userId={userId} userName={userName} blogId={blogId} />
    </ConvexClientProvider>
  );
}

function BlogContent({
  userId,
  userName,
  blogId,
}: {
  userId: string;
  userName: string;
  blogId: string;
}) {
  const blog = useQuery(api.queries.getBlogById, {
    id: blogId as Id<"blogs">,
  });

  if (!blog) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-16 w-full" />
        <div className="flex justify-end gap-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    );
  }

  return (
    <BlogForm
      userId={blog.userId || userId}
      userName={blog.userName || userName}
      initialData={{
        id: blog._id,
        title: blog.title,
        content: blog.content,
        imageUrl: blog.imageUrl,
        published: blog.published,
      }}
    />
  );
}
