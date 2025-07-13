"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  BookOpen,
  FileText,
  Globe,
  Code,
  Terminal,
  Database,
  Server,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogSidebar() {
  // Categories with icons
  const categories = [
    { name: "Web Development", icon: Globe, count: 42 },
    { name: "JavaScript", icon: Code, count: 36 },
    { name: "React", icon: Code, count: 28 },
    { name: "Next.js", icon: Server, count: 24 },
    { name: "CSS & Design", icon: FileText, count: 18 },
    { name: "Tools & Tips", icon: Terminal, count: 15 },
    { name: "Databases", icon: Database, count: 12 },
    { name: "Backend", icon: Server, count: 10 },
    { name: "Career Advice", icon: Coffee, count: 8 },
  ];

  // Popular posts
  const popularPosts = [
    {
      title: "10 Essential VS Code Extensions Every Developer Needs in 2025",
      url: "/blog/vs-code-extensions",
      date: "15 June 2025",
    },
    {
      title: "Understanding the JavaScript Event Loop: A Beginner's Guide",
      url: "/blog/javascript-event-loop",
      date: "10 June 2025",
    },
    {
      title:
        "How to Build a Real-time Chat Application with Next.js and Socket.IO",
      url: "/blog/realtime-chat-nextjs",
      date: "5 June 2025",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which?",
      url: "/blog/css-grid-vs-flexbox",
      date: "1 June 2025",
    },
  ];

  return (
    <div className="space-y-8">
      {/* About Card */}
      <Card className="p-6 bg-gray-50 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">About TechDev</h3>
        <p className="text-gray-600 text-sm mb-4">
          TechDev is dedicated to making you a better web developer with
          practical tutorials, guides, and the latest tech news.
        </p>
        <Link href="/about">
          <Button
            variant="outline"
            className="w-full border-cyan-500 text-cyan-500 hover:bg-cyan-50"
          >
            Learn More About Us
          </Button>
        </Link>
      </Card>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center">
                <category.icon className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 mr-2" />
                <span className="text-gray-700 group-hover:text-gray-900">
                  {category.name}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-1">
                  ({category.count})
                </span>
                <ChevronRight className="h-3 w-3 text-gray-300 group-hover:text-cyan-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <Link
                href={post.url}
                className="text-gray-800 hover:text-cyan-600 font-medium text-sm block mb-1"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 text-xs">{post.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Card */}
      <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get the latest web development tips, tutorials, and resources
          delivered to your inbox weekly.
        </p>
        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
          Subscribe Now
        </Button>
      </Card>

      {/* Resource Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
        <div className="space-y-2">
          <Link
            href="/resources/courses"
            className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 transition-colors group"
          >
            <BookOpen className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 mr-2" />
            <span className="text-gray-700 group-hover:text-gray-900">
              Courses 🎓
            </span>
          </Link>
          <Link
            href="/resources/guides"
            className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 transition-colors group"
          >
            <FileText className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 mr-2" />
            <span className="text-gray-700 group-hover:text-gray-900">
              Guides 📚
            </span>
          </Link>
          <Link
            href="/resources/tools"
            className="flex items-center py-2 px-3 rounded-md hover:bg-gray-100 transition-colors group"
          >
            <Terminal className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 mr-2" />
            <span className="text-gray-700 group-hover:text-gray-900">
              Developer Tools 🧰
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
