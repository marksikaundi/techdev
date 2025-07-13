"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Pencil, Trash2, Clock, Loader2 } from "lucide-react";
import { usePostsAdmin } from "@/hooks/use-convex-admin";
import { useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { capitalize } from "@/lib/utils";

export default function PostPage({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const { deletePost } = usePostsAdmin();
  
  // Get the post data directly from Convex
  const postData = usePostsAdmin().getPost(params.postId as Id<"posts">);
  
  const [isDeleting, setIsDeleting] = useState(false);

  // Format date from ISO string
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return "N/A";
    }
  };

  // Handle delete post
  const handleDeletePost = async () => {
    if (!postData) return;
    
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    
    if (confirmDelete) {
      setIsDeleting(true);
      try {
        await deletePost({ id: postData._id });
        alert("The post has been successfully deleted.");
        router.push("/admin/posts");
      } catch (error) {
        alert("Failed to delete the post.");
        console.error("Error deleting post:", error);
        setIsDeleting(false);
      }
    }
  };

  // Loading state
  if (postData === undefined || isDeleting) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
        <p className="ml-2 text-gray-500">
          {isDeleting ? "Deleting post..." : "Loading post..."}
        </p>
      </div>
    );
  }

  // Error state - post not found
  if (postData === null) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Post not found
        </h3>
        <p className="text-gray-500 mb-6">
          The requested post could not be found
        </p>
        <Link href="/admin/posts">
          <Button>Back to Posts</Button>
        </Link>
      </div>
    );
  }

  // Rename for clarity in the JSX
  const post = postData;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/admin/posts">
            <Button variant="ghost" className="mr-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Post Details</h1>
            <p className="text-gray-600">View and manage post</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href={`/admin/posts/${params.postId}/edit`}>
            <Button variant="outline" className="border-gray-300">
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
            onClick={handleDeletePost}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          <Card className="p-6 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <Badge
                className={`
                  ${
                    post.status === "published"
                      ? "bg-green-100 text-green-800"
                      : post.status === "draft"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-800"
                  }
                `}
              >
                {capitalize(post.status)}
              </Badge>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.publishedAt
                  ? `Published: ${formatDate(post.publishedAt)}`
                  : `Updated: ${formatDate(post.updatedAt)}`}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>

            {post.featuredImage && (
              <div className="mb-6">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <div className="prose max-w-none">
              {post.content
                .split("\n")
                .map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </Card>
        </div>

        {/* Sidebar metadata */}
        <div className="space-y-6">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Post Metadata
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Author</h4>
                <p className="mt-1">{post.author}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Category</h4>
                <p className="mt-1">{capitalize(post.category)}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Slug</h4>
                <p className="mt-1 text-sm font-mono bg-gray-100 p-1 rounded">
                  {post.slug}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {post.tags ? (
                    post.tags.split(",").map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gray-100"
                      >
                        {tag.trim()}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-gray-400">No tags</span>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Stats</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Views</h4>
                <p className="mt-1 text-2xl font-semibold">{post.views || 0}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500">Created</h4>
                <p className="mt-1">{formatDate(post.updatedAt)}</p>
              </div>

              {post.publishedAt && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Published
                  </h4>
                  <p className="mt-1">{formatDate(post.publishedAt)}</p>
                </div>
              )}
            </div>
          </Card>

          <div className="flex space-x-2">
            <Link href={`/blog/${post.slug}`} className="flex-1">
              <Button variant="outline" className="w-full">
                View on Website
              </Button>
            </Link>
            <Link
              href={`/admin/posts/${params.postId}/edit`}
              className="flex-1"
            >
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                Edit Post
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
