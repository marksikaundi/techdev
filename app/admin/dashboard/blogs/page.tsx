import { AdminSidebar } from "@/components/admin/sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { BlogListTable } from "@/components/admin/blog-list-table";
import ConvexClientProvider from "@/components/providers/convex-provider";

export default async function BlogsManagementPage() {
  const authData = await auth();
  const { userId } = authData;

  if (!userId) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex h-screen bg-muted/20">
      <div className="w-64 h-full">
        <AdminSidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Blogs</h1>
            <p className="text-muted-foreground">
              Create, edit and manage your blog posts
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/dashboard/blogs/new">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Blog
            </Link>
          </Button>
        </div>

        <ConvexClientProvider>
          <BlogListTable userId={userId} />
        </ConvexClientProvider>
      </div>
    </div>
  );
}
