import { AdminSidebar } from "@/components/admin/sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BlogForm } from "@/components/admin/blog-form";
import ConvexClientProvider from "@/components/providers/convex-provider";

export default async function NewBlogPage() {
  const authData = await auth();
  const { userId } = authData;
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex h-screen bg-muted/20">
      <div className="w-64 h-full">
        <AdminSidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Create New Blog</h1>
          <p className="text-muted-foreground">
            Create and publish your new blog post
          </p>
        </div>

        <ConvexClientProvider>
          <BlogForm
            userId={userId}
            userName={`${user.firstName || ""} ${user.lastName || ""}`.trim()}
          />
        </ConvexClientProvider>
      </div>
    </div>
  );
}
