"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Eye,
  Upload,
  Clock,
  Tag,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form schema with zod
const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  category: z.string().min(1, "Please select a category"),
  status: z.string().min(1, "Please select a status"),
  tags: z.string(),
  featuredImage: z.string().optional(),
});

export default function EditPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [previewMode, setPreviewMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sample blog post data (in a real app, you'd fetch this from your API)
  const postData = {
    id: 1,
    title: "Getting Started with Next.js: A Complete Guide for Beginners",
    excerpt: "Learn the fundamentals of Next.js and start building modern React applications.",
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
- Fast refresh`,
    category: "tutorial",
    status: "published",
    tags: "nextjs,react,tutorial,beginners",
    featuredImage: "/next.svg",
  };

  // Categories from your website
  const categories = [
    { value: "tutorial", label: "Tutorial" },
    { value: "react", label: "React" },
    { value: "typescript", label: "TypeScript" },
    { value: "css", label: "CSS" },
    { value: "tools", label: "Tools" },
    { value: "development", label: "Development" },
    { value: "security", label: "Security" },
    { value: "animation", label: "Animation" },
  ];

  // Status options
  const statuses = [
    { value: "draft", label: "Draft" },
    { value: "published", label: "Published" },
    { value: "scheduled", label: "Scheduled" },
  ];

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      status: "draft",
      tags: "",
      featuredImage: "",
    },
  });

  // Fetch post data and populate form
  useEffect(() => {
    // In a real app, you'd fetch the post by ID from your API
    // Here we're just simulating that with our sample data
    setTimeout(() => {
      form.reset({
        title: postData.title,
        excerpt: postData.excerpt,
        content: postData.content,
        category: postData.category,
        status: postData.status,
        tags: postData.tags,
        featuredImage: postData.featuredImage,
      });
      setLoading(false);
    }, 500);
  }, [form, params.id]);

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your API
    alert("Post updated successfully!");
    router.push("/admin/posts");
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
            <p className="text-gray-600">Edit an existing blog post</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="border-gray-300"
            onClick={() => setPreviewMode(!previewMode)}
          >
            <Eye className="h-4 w-4 mr-2" />
            {previewMode ? "Edit" : "Preview"}
          </Button>
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            <Save className="h-4 w-4 mr-2" />
            Update
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          <Card className="p-6 border-gray-200">
            {!previewMode ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter post title"
                            {...field}
                            className="text-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Brief description of your post"
                            {...field}
                            rows={3}
                          />
                        </FormControl>
                        <FormDescription>
                          This will be displayed on the blog index page.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your post content here..."
                            {...field}
                            rows={15}
                            className="font-mono text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            ) : (
              <div className="prose max-w-none">
                <h1>{form.watch("title") || "Post Title"}</h1>
                <p className="lead">
                  {form.watch("excerpt") ||
                    "This is where your post excerpt will appear."}
                </p>
                <div className="my-4 h-48 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-md">
                  {form.watch("featuredImage") ? (
                    <img
                      src={form.watch("featuredImage")}
                      alt="Featured"
                      className="h-full w-full object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-gray-500">Featured Image</span>
                    </>
                  )}
                </div>
                <div>
                  {form.watch("content") ||
                    "Your post content will appear here. Start writing to see a preview."}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Sidebar settings */}
        <div className="space-y-6">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Post Settings
            </h3>
            <Form {...form}>
              <form className="space-y-4">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem
                              key={status.value}
                              value={status.value}
                            >
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="e.g., nextjs, react, tutorial"
                            {...field}
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Separate tags with commas
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </Card>

          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Featured Image
            </h3>
            <div className="mb-4 h-40 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
              {form.watch("featuredImage") ? (
                <img
                  src={form.watch("featuredImage")}
                  alt="Featured"
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    No image selected
                  </p>
                </div>
              )}
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-300"
              onClick={() => {
                const url = prompt("Enter image URL");
                if (url) form.setValue("featuredImage", url);
              }}
            >
              <Upload className="h-4 w-4 mr-2" />
              Change Image
            </Button>
          </Card>

          <Card className="p-6 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Delete Post
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              This action cannot be undone. This will permanently delete this
              post from our servers.
            </p>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                const confirmDelete = window.confirm(
                  "Are you sure you want to delete this post? This action cannot be undone."
                );
                if (confirmDelete) {
                  alert("Post deleted successfully!");
                  router.push("/admin/posts");
                }
              }}
            >
              Delete Post
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
