import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogSidebar } from "@/components/blog-sidebar";
import {
  Calendar,
  Clock,
  UserRound,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function BlogPage() {
  // Sample blog posts data
  const allPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js: A Complete Guide for Beginners",
      excerpt:
        "Learn the fundamentals of Next.js and start building modern React applications.",
      image: "/next.svg",
      author: "Mark Sikaundi",
      date: "10 Jul 2025",
      readTime: "5 min read",
      comments: 3,
      category: "Tutorial",
      categoryUrl: "/category/tutorial",
    },
    {
      id: 2,
      title: "Mastering TypeScript: Essential Tips and Tricks",
      excerpt:
        "Take your TypeScript skills to the next level with these advanced techniques.",
      image: "/vercel.svg",
      author: "Jane Doe",
      date: "8 Jul 2025",
      readTime: "7 min read",
      comments: 5,
      category: "Development",
      categoryUrl: "/category/development",
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn how to design and implement RESTful APIs that can handle millions of requests.",
      image: "/file.svg",
      author: "John Smith",
      date: "5 Jul 2025",
      readTime: "10 min read",
      comments: 8,
      category: "Backend",
      categoryUrl: "/category/backend",
    },
    {
      id: 4,
      title: "The Complete Guide to React Hooks",
      excerpt:
        "Everything you need to know about React Hooks and how to use them effectively.",
      image: "/window.svg",
      author: "Sarah Johnson",
      date: "12 Jul 2025",
      readTime: "8 min read",
      comments: 10,
      category: "Frontend",
      categoryUrl: "/category/frontend",
    },
    {
      id: 5,
      title: "Docker for Development: Best Practices",
      excerpt:
        "Optimize your development workflow with Docker containers and compose.",
      image: "/globe.svg",
      author: "Michael Brown",
      date: "9 Jul 2025",
      readTime: "6 min read",
      comments: 4,
      category: "DevOps",
      categoryUrl: "/category/devops",
    },
    {
      id: 6,
      title: "Introduction to GraphQL: Beyond REST APIs",
      excerpt:
        "Discover how GraphQL can improve your API development and consumption experience.",
      image: "/next.svg",
      author: "Emily Chen",
      date: "7 Jul 2025",
      readTime: "9 min read",
      comments: 6,
      category: "API",
      categoryUrl: "/category/api",
    },
    {
      id: 7,
      title: "State Management in React: Context API vs. Redux",
      excerpt:
        "Compare different state management approaches and choose the right one for your project.",
      image: "/vercel.svg",
      author: "Mark Sikaundi",
      date: "4 Jul 2025",
      readTime: "7 min read",
      comments: 9,
      category: "Frontend",
      categoryUrl: "/category/frontend",
    },
    {
      id: 8,
      title: "Optimizing Performance in JavaScript Applications",
      excerpt:
        "Learn techniques to make your JavaScript applications faster and more efficient.",
      image: "/file.svg",
      author: "Alex Johnson",
      date: "1 Jul 2025",
      readTime: "8 min read",
      comments: 7,
      category: "Performance",
      categoryUrl: "/category/performance",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-slate-600">
              Explore our latest articles, tutorials, and insights about web
              development, programming, and technology.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-10">
            {allPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 relative h-52 md:h-auto bg-slate-100 flex items-center justify-center p-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={150}
                    height={150}
                    className="h-auto object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col">
                  <div className="mb-4">
                    <Link href={post.categoryUrl}>
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                    </Link>
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600">{post.excerpt}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap justify-between items-center text-sm text-slate-500">
                      <div className="flex items-center mr-4 mb-2 md:mb-0">
                        <UserRound className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center mr-4 mb-2 md:mb-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center mr-4 mb-2 md:mb-0">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center mb-2 md:mb-0">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
