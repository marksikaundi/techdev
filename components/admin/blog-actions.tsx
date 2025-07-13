"use client";

import { Button } from "@/components/ui/button";
import { Trash2, Eye, EyeOff } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";

export function BlogActions({ blogId }: { blogId: Id<"blogs"> }) {
  const router = useRouter();
  const blog = useQuery(api.queries.getBlogById, { id: blogId });
  const deleteBlog = useMutation(api.blogs.deleteBlog);
  const updateBlog = useMutation(api.blogs.updateBlog);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteBlog({ id: blogId });
      toast.success("Blog post deleted successfully");
      router.push("/admin/dashboard/blogs");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog post");
    } finally {
      setIsDeleteDialogOpen(false);
    }
  };

  const togglePublishStatus = async () => {
    if (!blog) return;

    try {
      const newStatus = !blog.published;
      await updateBlog({
        id: blogId,
        published: newStatus,
      });
      toast.success(
        newStatus
          ? "Blog published successfully! It's now visible to the public."
          : "Blog unpublished. It's now in draft mode and only visible to you."
      );
    } catch (error) {
      console.error("Error updating publish status:", error);
      toast.error("Failed to update blog status");
    }
  };

  if (!blog) {
    return null;
  }

  return (
    <>
      <Button variant="outline" size="sm" onClick={togglePublishStatus}>
        {blog.published ? (
          <>
            <EyeOff className="h-4 w-4 mr-2" />
            Unpublish
          </>
        ) : (
          <>
            <Eye className="h-4 w-4 mr-2" />
            Publish
          </>
        )}
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Delete
      </Button>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this blog post. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
