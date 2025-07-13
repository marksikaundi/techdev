"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pencil,
  Trash2,
  MoreVertical,
  Eye,
  Plus,
  Search,
  Filter,
  Loader2,
} from "lucide-react";
import { usePostsAdmin, useSeedData } from "@/hooks/use-convex-admin";
import { Id } from "@/convex/_generated/dataModel";

export default function AdminPosts() {
  // Get the posts from Convex
  const { posts, deletePost } = usePostsAdmin();
  const { seedInitialData } = useSeedData();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Seed initial data if needed
  useEffect(() => {
    if (posts && posts.length === 0) {
      const seedData = async () => {
        setLoading(true);
        try {
          await seedInitialData({});
          alert("Initial blog data has been loaded.");
        } catch (error) {
          alert("Failed to initialize data.");
          console.error("Error seeding data:", error);
        } finally {
          setLoading(false);
        }
      };
      
      seedData();
    }
  }, [posts, seedInitialData]);

  // Format date from ISO string
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch (e) {
      return "N/A";
    }
  };

  // Handle delete post
  const handleDeletePost = async (id: Id<"posts">) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    
    if (confirmDelete) {
      setLoading(true);
      try {
        await deletePost({ id });
        alert("The post has been successfully deleted.");
      } catch (error) {
        alert("Failed to delete the post.");
        console.error("Error deleting post:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Filter posts based on search query and filters
  const filteredPosts = posts
    ? posts.filter((post) => {
        // Apply text search
        const matchesSearch = post.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        
        // Apply status filter
        const matchesStatus = 
          statusFilter === "all" || 
          post.status.toLowerCase() === statusFilter.toLowerCase();
        
        // Apply category filter
        const matchesCategory = 
          categoryFilter === "all" || 
          post.category.toLowerCase() === categoryFilter.toLowerCase();
        
        return matchesSearch && matchesStatus && matchesCategory;
      })
    : [];

  // Get unique categories from posts
  const categories = posts
    ? Array.from(new Set(posts.map((post) => post.category)))
    : [];

  // Helper to capitalize first letter
  const capitalize = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
          <p className="text-gray-600">Manage your blog posts</p>
        </div>
        <Link href="/admin/posts/create">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6 border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300">
                  Status: {capitalize(statusFilter)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("published")}>
                  Published
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("draft")}>
                  Draft
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("scheduled")}>
                  Scheduled
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300">
                  Category: {capitalize(categoryFilter)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>
                  All
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category} 
                    onClick={() => setCategoryFilter(category)}
                  >
                    {capitalize(category)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>

      {/* Posts table */}
      <Card className="border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
            <p className="ml-2 text-gray-500">Loading posts...</p>
          </div>
        ) : posts && posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500 mb-6">Start by creating your first blog post</p>
            <Link href="/admin/posts/create">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Post
              </Button>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[450px]">Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post._id}>
                    <TableCell className="font-medium">
                      <Link
                        href={`/admin/posts/${post._id}`}
                        className="text-cyan-600 hover:text-cyan-800 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`
                          ${
                            post.status.toLowerCase() === "published"
                              ? "bg-green-100 text-green-800"
                              : post.status.toLowerCase() === "draft"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        `}
                      >
                        {capitalize(post.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{capitalize(post.category)}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{formatDate(post.publishedAt || post.updatedAt)}</TableCell>
                    <TableCell>{post.views || 0}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link
                                href={`/admin/posts/${post._id}/edit`}
                                className="flex items-center"
                              >
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDeletePost(post._id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      {/* Pagination (static for demo) */}
      {filteredPosts.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">{filteredPosts.length}</span> of{" "}
            <span className="font-medium">{filteredPosts.length}</span> results
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
              disabled
            >
              Previous
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
              disabled
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
