"use client";

import { useState, useEffect, FormEvent } from "react";
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
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePostsAdmin, useCategoriesAdmin } from "@/hooks/use-convex-admin";
import { Id } from "@/convex/_generated/dataModel";
import { capitalize } from "@/lib/utils";

// Helper to convert string to slug
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
};

export default function PostForm({ postId }: { postId?: string }) {
  const router = useRouter();
  const { createPost, updatePost, getPost } = usePostsAdmin();
  const { categories } = useCategoriesAdmin();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(!!postId);
  const [formError, setFormError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "/next.svg", // Default image
    category: "",
    status: "draft",
    tags: "",
    author: "Mark Sikaundi", // Default author
  });

  // Load post data if editing
  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          // First get the function that will fetch the post
          const fetchPostById = getPost(postId as Id<"posts">);
          // Then call the function to get the actual post data
          const post = await fetchPostById;

          if (post) {
            setFormData({
              title: post.title,
              slug: post.slug,
              excerpt: post.excerpt || "",
              content: post.content,
              featuredImage: post.featuredImage || "/next.svg",
              category: post.category,
              status: post.status,
              tags: post.tags || "",
              author: post.author,
            });
            setIsLoadingPost(false);
          } else {
            setFormError("Post not found");
            setIsLoadingPost(false);
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          setFormError("Error loading post");
          setIsLoadingPost(false);
        }
      };

      fetchPost();
    }
  }, [postId, getPost]);

  // Auto-generate slug when title changes
  useEffect(() => {
    if (!postId && formData.title && !formData.slug) {
      setFormData({
        ...formData,
        slug: generateSlug(formData.title),
      });
    }
  }, [formData.title, formData.slug, postId]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);

    try {
      // Validate required fields
      const requiredFields = ["title", "slug", "category", "author", "content"];
      const missingFields = requiredFields.filter(
        (field) => !formData[field as keyof typeof formData]
      );

      if (missingFields.length > 0) {
        setFormError(`Missing required fields: ${missingFields.join(", ")}`);
        setIsLoading(false);
        return;
      }

      if (postId) {
        // Update existing post
        await updatePost({
          id: postId as Id<"posts">,
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          featuredImage: formData.featuredImage,
          category: formData.category,
          status: formData.status,
          tags: formData.tags,
        });

        alert("Post updated successfully!");
      } else {
        // Create new post
        await createPost(formData);
        alert("Post created successfully!");
      }

      // Redirect to posts list
      router.push("/admin/posts");
      router.refresh();
    } catch (error: any) {
      console.error("Error saving post:", error);
      setFormError(error.message || "Error saving post");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingPost) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
        <p className="ml-2 text-gray-500">Loading post...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {postId ? "Edit Post" : "Create New Post"}
          </h1>
          <p className="text-gray-600">
            {postId ? "Update post details" : "Add a new blog post"}
          </p>
        </div>
        <Link href="/admin/posts">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
        </Link>
      </div>

      <Card className="p-6 border-gray-200">
        {formError && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter post title"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="post-url-slug"
                className="mt-1"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                URL-friendly version of the title
              </p>
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="A brief summary of the post"
                className="mt-1 h-20"
              />
            </div>

            <div>
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                className="mt-1 h-64"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Supports Markdown formatting
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    handleSelectChange("category", value)
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Status *</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleSelectChange("status", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g., javascript, react, tutorial"
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Comma-separated list of tags
              </p>
            </div>

            <div>
              <Label htmlFor="author">Author *</Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                placeholder="/path/to/image.jpg"
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Link href="/admin/posts">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Post
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
