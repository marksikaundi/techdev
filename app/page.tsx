import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Clock,
  MessageCircle,
  UserRound,
} from "lucide-react";

export default function Home() {
  // Sample blog posts data
  const latestPosts = [
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
  ];

  const featuredPosts = [
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
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making You a Better Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10">
              In-depth articles, tutorials, and resources for developers who want
              to build better software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/blog">
                  Browse Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button asChild variant="ghost">
            <Link href="/blog">
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-52 bg-slate-100 flex items-center justify-center p-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={180}
                  height={120}
                  className="h-auto object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <Link href={post.categoryUrl}>
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                  </Link>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600">{post.excerpt}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center">
                      <UserRound className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Featured Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative h-52 md:h-auto bg-slate-100 flex items-center justify-center p-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={120}
                    height={120}
                    className="h-auto object-contain"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="mb-4">
                    <Link href={post.categoryUrl}>
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                    </Link>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600">{post.excerpt}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <div className="flex items-center">
                        <UserRound className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with the Latest in Tech
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join our newsletter and receive the freshest tutorials, articles, and
            resources straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="rounded-md">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
