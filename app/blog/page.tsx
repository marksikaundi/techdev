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
      title: "5 Essential VS Code Extensions for JavaScript Developers",
      excerpt:
        "Boost your productivity with these must-have VS Code extensions for JavaScript development.",
      image: "/window.svg",
      author: "Jane Doe",
      date: "08 Jul 2025",
      readTime: "4 min read",
      comments: 0,
      category: "Tools",
      categoryUrl: "/category/tools",
    },
    {
      id: 3,
      title: "Understanding React Hooks: From useState to useEffect",
      excerpt:
        "A deep dive into React Hooks and how they transform the way we build React components.",
      image: "/file.svg",
      author: "Mark Sikaundi",
      date: "07 Jul 2025",
      readTime: "7 min read",
      comments: 2,
      category: "React",
      categoryUrl: "/category/react",
    },
    {
      id: 4,
      title: "The Complete Guide to Tailwind CSS in 2025",
      excerpt:
        "Master Tailwind CSS and create beautiful, responsive websites with minimal effort.",
      image: "/globe.svg",
      author: "John Smith",
      date: "05 Jul 2025",
      readTime: "6 min read",
      comments: 1,
      category: "CSS",
      categoryUrl: "/category/css",
    },
    {
      id: 5,
      title: "Building a Full-Stack Application with Next.js and Convex",
      excerpt:
        "Learn how to create a modern web application using Next.js and Convex for your backend.",
      image: "/vercel.svg",
      author: "Mark Sikaundi",
      date: "03 Jul 2025",
      readTime: "8 min read",
      comments: 5,
      category: "Development",
      categoryUrl: "/category/development",
    },
    {
      id: 6,
      title:
        "The Power of TypeScript: Why You Should Use It in Your Next Project",
      excerpt:
        "Discover the benefits of TypeScript and how it can improve your development workflow.",
      image: "/file.svg",
      author: "Jane Doe",
      date: "01 Jul 2025",
      readTime: "6 min read",
      comments: 3,
      category: "TypeScript",
      categoryUrl: "/category/typescript",
    },
    {
      id: 7,
      title: "Modern Authentication in Next.js with Clerk",
      excerpt:
        "Implement a secure authentication system in your Next.js application using Clerk.",
      image: "/next.svg",
      author: "Mark Sikaundi",
      date: "28 Jun 2025",
      readTime: "7 min read",
      comments: 2,
      category: "Security",
      categoryUrl: "/category/security",
    },
    {
      id: 8,
      title: "Creating Stunning Animations with Framer Motion",
      excerpt:
        "Learn how to add beautiful animations to your React components with Framer Motion.",
      image: "/window.svg",
      author: "John Smith",
      date: "25 Jun 2025",
      readTime: "5 min read",
      comments: 4,
      category: "Animation",
      categoryUrl: "/category/animation",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-600">
            Latest articles, tutorials, and resources for web developers
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 gap-8">
              {allPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover flex flex-col md:flex-row"
                >
                  <div className="relative h-48 md:h-auto md:w-1/3 bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <Link href={post.categoryUrl} className="inline-block mb-2">
                      <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-3 py-1">
                        {post.category}
                      </Badge>
                    </Link>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
                      <Link
                        href={`/author/${post.author
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center hover:text-cyan-600"
                      >
                        <UserRound className="h-4 w-4 mr-1" />
                        {post.author}
                      </Link>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      {post.comments > 0 && (
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments} comments
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Previous
                </Button>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  1
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
