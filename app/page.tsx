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
      excerpt: "Learn the fundamentals of Next.js and start building modern React applications.",
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
      excerpt: "Boost your productivity with these must-have VS Code extensions for JavaScript development.",
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
      excerpt: "A deep dive into React Hooks and how they transform the way we build React components.",
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
      excerpt: "Master Tailwind CSS and create beautiful, responsive websites with minimal effort.",
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
      excerpt: "Learn how to create a modern web application using Next.js and Convex for your backend.",
      image: "/vercel.svg",
      author: "Mark Sikaundi",
      date: "03 Jul 2025",
      readTime: "8 min read",
      comments: 5,
      category: "Development",
      categoryUrl: "/category/development",
    },
  ];

  // Featured resources
  const featuredResources = [
    {
      id: 1,
      title: "Getting Started With Next.js",
      excerpt: "New to Next.js? Start here with tutorials for beginners.",
      image: "/next.svg",
      tags: ["Next.js", "React", "Resources"],
    },
    {
      id: 2,
      title: "The Ultimate Guide to React Development",
      excerpt: "Learn about creating modern web applications with React in this super-detailed guide.",
      image: "/file.svg",
      tags: ["React", "Guides", "Development"],
    },
    {
      id: 3,
      title: "JavaScript Fundamentals for Beginners",
      excerpt: "Get acquainted with JavaScript in this course for beginners.",
      image: "/window.svg",
      tags: ["JavaScript", "Courses", "Beginners"],
    },
    {
      id: 4,
      title: "Web Development in 2025",
      excerpt: "Learn the essentials of modern web development in this collection of quick tutorials.",
      image: "/globe.svg",
      tags: ["Web Dev", "Tutorials", "Learning"],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-7/12 mb-10 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text-shadow">
                Become a Better{" "}
                <span className="text-cyan-400">Web Developer</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl">
                With the TechDev Weekly Newsletter, you learn useful web
                development tips, discover frameworks, explore new tools, and
                stay updated with the latest from the tech world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-6 rounded-md text-lg font-medium h-auto">
                  Subscribe to Newsletter
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-6 py-6 rounded-md text-lg font-medium h-auto"
                >
                  Browse Tutorials
                </Button>
              </div>
            </div>
            <div className="lg:w-5/12 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/vercel.svg"
                  alt="Developer"
                  width={500}
                  height={500}
                  className="penguin-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Latest</h2>
            <Link
              href="/blog"
              className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center gap-1"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Link
                    href={post.categoryUrl}
                    className="absolute top-4 left-4"
                  >
                    <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-3 py-1">
                      {post.category}
                    </Badge>
                  </Link>
                </div>
                <div className="p-6">
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Link
                      href={`/author/${post.author
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center mr-4 hover:text-cyan-600"
                    >
                      <UserRound className="h-4 w-4 mr-1" />
                      {post.author}
                    </Link>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {latestPosts.slice(3, 5).map((post) => (
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
                  <Link
                    href={post.categoryUrl}
                    className="inline-block mb-2"
                  >
                    <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-3 py-1">
                      {post.category}
                    </Badge>
                  </Link>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Link
                      href={`/author/${post.author
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center mr-4 hover:text-cyan-600"
                    >
                      <UserRound className="h-4 w-4 mr-1" />
                      {post.author}
                    </Link>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In Case You Missed It Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            In Case You Missed It
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.slice(2, 5).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Link
                    href={post.categoryUrl}
                    className="absolute top-4 left-4"
                  >
                    <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-3 py-1">
                      {post.category}
                    </Badge>
                  </Link>
                </div>
                <div className="p-6">
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Link
                      href={`/author/${post.author
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center mr-4 hover:text-cyan-600"
                    >
                      <UserRound className="h-4 w-4 mr-1" />
                      {post.author}
                    </Link>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Developer Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource) => (
              <Card
                key={resource.id}
                className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover bg-gradient-to-br from-gray-50 to-white p-6"
              >
                <div className="flex items-start">
                  <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center mr-4 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href={`/resources/${resource.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-cyan-600 transition-colors">
                        {resource.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-7/12 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Better Web Developer
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                With the TechDev Weekly Newsletter, you learn useful web
                development tips, discover frameworks, explore new tools, and
                stay updated with the latest from the tech world.
              </p>
            </div>
            <div className="lg:w-4/12 flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-lg font-medium h-auto">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
