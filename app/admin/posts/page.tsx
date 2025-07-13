"use client";

import { useState } from "react";
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
} from "lucide-react";

export default function AdminPosts() {
  // Sample blog posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with Next.js: A Complete Guide for Beginners",
      status: "Published",
      category: "Tutorial",
      author: "Mark Sikaundi",
      date: "10 Jul 2025",
      views: 1204,
    },
    {
      id: 2,
      title: "5 Essential VS Code Extensions for JavaScript Developers",
      status: "Published",
      category: "Tools",
      author: "Jane Doe",
      date: "08 Jul 2025",
      views: 986,
    },
    {
      id: 3,
      title: "Understanding React Hooks: From useState to useEffect",
      status: "Published",
      category: "React",
      author: "Mark Sikaundi",
      date: "07 Jul 2025",
      views: 1547,
    },
    {
      id: 4,
      title: "The Complete Guide to Tailwind CSS in 2025",
      status: "Published",
      category: "CSS",
      author: "John Smith",
      date: "05 Jul 2025",
      views: 852,
    },
    {
      id: 5,
      title: "Building a Full-Stack Application with Next.js and Convex",
      status: "Draft",
      category: "Development",
      author: "Mark Sikaundi",
      date: "03 Jul 2025",
      views: 0,
    },
    {
      id: 6,
      title: "The Power of TypeScript: Why You Should Use It in Your Next Project",
      status: "Published",
      category: "TypeScript",
      author: "Jane Doe",
      date: "01 Jul 2025",
      views: 745,
    },
    {
      id: 7,
      title: "Modern Authentication in Next.js with Clerk",
      status: "Draft",
      category: "Security",
      author: "Mark Sikaundi",
      date: "28 Jun 2025",
      views: 0,
    },
    {
      id: 8,
      title: "Creating Stunning Animations with Framer Motion",
      status: "Scheduled",
      category: "Animation",
      author: "John Smith",
      date: "25 Jun 2025",
      views: 0,
    },
  ]);

  // Sample filtering options (not implemented)
  const [searchQuery, setSearchQuery] = useState("");

  // Handle delete post
  const handleDeletePost = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      setPosts(posts.filter((post) => post.id !== id));
    }
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
            <Button variant="outline" className="border-gray-300">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300">
                  Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Published</DropdownMenuItem>
                <DropdownMenuItem>Draft</DropdownMenuItem>
                <DropdownMenuItem>Scheduled</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300">
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Tutorial</DropdownMenuItem>
                <DropdownMenuItem>React</DropdownMenuItem>
                <DropdownMenuItem>TypeScript</DropdownMenuItem>
                <DropdownMenuItem>CSS</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>

      {/* Posts table */}
      <Card className="border-gray-200 overflow-hidden">
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
              {posts
                .filter((post) =>
                  post.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="text-cyan-600 hover:text-cyan-800 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`
                          ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : post.status === "Draft"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        `}
                      >
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{post.date}</TableCell>
                    <TableCell>{post.views}</TableCell>
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
                                href={`/blog/${post.id}`}
                                className="flex items-center"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link
                                href={`/admin/posts/${post.id}/edit`}
                                className="flex items-center"
                              >
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleDeletePost(post.id)}
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
      </Card>

      {/* Pagination (static for demo) */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">8</span> of{" "}
          <span className="font-medium">8</span> results
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
    </div>
  );
}
