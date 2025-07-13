"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Eye,
  Clock,
  User,
  BarChart,
  Calendar,
  Tag,
} from "lucide-react";
import Link from "next/link";

export default function PostDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const postId = parseInt(params.id);

  // Sample post data (in a real app, you would fetch this based on the ID)
  const post = {
    id: postId,
    title: "Getting Started with Next.js: A Complete Guide for Beginners",
    content: `Next.js has become one of the most popular React frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and built-in routing, Next.js provides an excellent developer experience while ensuring optimal performance for your users.

## What is Next.js?

Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features to improve performance and developer experience. Created by Vercel, Next.js has gained significant popularity in the React community due to its robust features and ease of use.

Some of the key features of Next.js include:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Incremental static regeneration (ISR)
- File-based routing
- API routes
- Built-in CSS and Sass support
- Image optimization
- Fast refresh

## Getting Started

To create a new Next.js app, you can use the create-next-app command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will set up a new Next.js project with all the necessary dependencies and a basic project structure.`,
    status: "Published",
    category: "Tutorial",
    author: "Mark Sikaundi",
    date: "10 Jul 2025",
    publishedAt: "10 Jul 2025, 10:32 AM",
    updatedAt: "12 Jul 2025, 03:14 PM",
    views: 1204,
    comments: 8,
    shares: 26,
    likes: 52,
    tags: ["nextjs", "react", "tutorial", "webdev"],
    featuredImage: "/next.svg",
  };

  // Handle delete
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post? This action cannot be undone."
    );
    if (confirmDelete) {
      alert("Post deleted successfully!");
      router.push("/admin/posts");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="mr-2"
            onClick={() => router.push("/admin/posts")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Badge
                className={`mr-2 ${
                  post.status === "Published"
                    ? "bg-green-100 text-green-800"
                    : post.status === "Draft"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {post.status}
              </Badge>
              <span className="mr-2">{post.category}</span>
              <span>•</span>
              <span className="mx-2">
                <User className="inline h-3 w-3 mr-1" />
                {post.author}
              </span>
              <span>•</span>
              <span className="mx-2">
                <Calendar className="inline h-3 w-3 mr-1" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href={`/blog/${post.id}`}>
            <Button variant="outline" className="border-gray-300">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </Link>
          <Link href={`/admin/posts/${post.id}/edit`}>
            <Button variant="outline" className="border-gray-300">
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          <Card className="p-6 border-gray-200">
            {post.featuredImage && (
              <div className="mb-6">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
            )}
            <div className="prose max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Post Details
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="mt-1">{post.status}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Category</p>
                <p className="mt-1">{post.category}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Author</p>
                <p className="mt-1">{post.author}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Published Date
                </p>
                <p className="mt-1">{post.publishedAt}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Last Updated
                </p>
                <p className="mt-1">{post.updatedAt}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Tags</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Post Analytics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Views</span>
                </div>
                <span className="font-semibold">
                  {post.views.toLocaleString()}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span className="text-gray-600">Comments</span>
                </div>
                <span className="font-semibold">{post.comments}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span className="text-gray-600">Shares</span>
                </div>
                <span className="font-semibold">{post.shares}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-gray-600">Likes</span>
                </div>
                <span className="font-semibold">{post.likes}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Post Actions
              </h3>
            </div>
            <div className="space-y-2">
              <Link href={`/admin/posts/${post.id}/edit`} className="w-full">
                <Button className="w-full">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
              </Link>
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Post
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
