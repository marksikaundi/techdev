import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
    <div className="p-8">
      <div className="flex items-center mb-8">
        <Button asChild variant="ghost" size="sm" className="mr-4">
          <Link href="/admin/dashboard/blogs">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Create New Blog</h1>
      </div>

      <ConvexClientProvider>
        <BlogForm
          userId={userId}
          userName={`${user.firstName || ""} ${user.lastName || ""}`.trim()}
        />
      </ConvexClientProvider>
    </div>
  );
}
