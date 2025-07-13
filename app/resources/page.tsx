import Link from "next/link";
import Image from "next/image";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  FileText,
  Globe,
  Code,
  Terminal,
  Database,
  Server,
  Coffee,
  Lightbulb,
  Info,
  Clock,
} from "lucide-react";

export default function ResourcesPage() {
  // Sample resources data
  const courses = [
    {
      id: 1,
      title: "Next.js Fundamentals",
      description:
        "Learn the core concepts of Next.js and build modern, SEO-friendly React applications.",
      image: "/next.svg",
      level: "Beginner",
      modules: 8,
      duration: "4 hours",
      instructor: "Mark Sikaundi",
      category: "Web Development",
      popular: true,
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      description:
        "Master advanced React patterns and techniques to build scalable applications.",
      image: "/file.svg",
      level: "Advanced",
      modules: 12,
      duration: "6 hours",
      instructor: "Jane Doe",
      category: "React",
      popular: true,
    },
    {
      id: 3,
      title: "Full-Stack JavaScript Development",
      description:
        "Build complete web applications with Node.js, Express, and MongoDB.",
      image: "/globe.svg",
      level: "Intermediate",
      modules: 15,
      duration: "8 hours",
      instructor: "John Smith",
      category: "JavaScript",
      popular: false,
    },
    {
      id: 4,
      title: "TypeScript for React Developers",
      description:
        "Learn how to leverage TypeScript in your React applications for better type safety.",
      image: "/window.svg",
      level: "Intermediate",
      modules: 10,
      duration: "5 hours",
      instructor: "Mark Sikaundi",
      category: "TypeScript",
      popular: true,
    },
    {
      id: 5,
      title: "Building APIs with Node.js",
      description:
        "Learn how to create robust and scalable APIs using Node.js and Express.",
      image: "/vercel.svg",
      level: "Intermediate",
      modules: 8,
      duration: "4 hours",
      instructor: "Jane Doe",
      category: "Backend",
      popular: false,
    },
    {
      id: 6,
      title: "CSS Animations and Transitions",
      description:
        "Master CSS animations and transitions to create engaging user interfaces.",
      image: "/globe.svg",
      level: "Beginner",
      modules: 6,
      duration: "3 hours",
      instructor: "John Smith",
      category: "CSS & Design",
      popular: false,
    },
  ];

  const guides = [
    {
      id: 1,
      title: "The Ultimate Guide to Next.js",
      description:
        "A comprehensive guide to building modern web applications with Next.js.",
      image: "/next.svg",
      category: "Next.js",
      readTime: "15 min read",
      author: "Mark Sikaundi",
      date: "10 Jul 2025",
      popular: true,
    },
    {
      id: 2,
      title: "React State Management in 2025",
      description:
        "Explore the current state management solutions in the React ecosystem.",
      image: "/file.svg",
      category: "React",
      readTime: "12 min read",
      author: "Jane Doe",
      date: "05 Jul 2025",
      popular: true,
    },
    {
      id: 3,
      title: "Setting Up a Modern JavaScript Development Environment",
      description:
        "Learn how to set up a productive JavaScript development environment with the latest tools.",
      image: "/window.svg",
      category: "JavaScript",
      readTime: "10 min read",
      author: "John Smith",
      date: "01 Jul 2025",
      popular: false,
    },
    {
      id: 4,
      title: "Advanced TypeScript Features You Should Know",
      description:
        "Discover advanced TypeScript features that can make your code more robust and maintainable.",
      image: "/globe.svg",
      category: "TypeScript",
      readTime: "8 min read",
      author: "Mark Sikaundi",
      date: "28 Jun 2025",
      popular: true,
    },
    {
      id: 5,
      title: "Creating Accessible Web Applications",
      description:
        "A comprehensive guide to building web applications that are accessible to everyone.",
      image: "/vercel.svg",
      category: "Accessibility",
      readTime: "14 min read",
      author: "Jane Doe",
      date: "25 Jun 2025",
      popular: false,
    },
    {
      id: 6,
      title: "Performance Optimization in React Applications",
      description:
        "Learn how to identify and fix performance issues in your React applications.",
      image: "/file.svg",
      category: "Performance",
      readTime: "11 min read",
      author: "John Smith",
      date: "20 Jun 2025",
      popular: true,
    },
  ];

  const tools = [
    {
      id: 1,
      title: "VS Code",
      description:
        "A lightweight but powerful source code editor from Microsoft.",
      image: "/window.svg",
      category: "IDE",
      link: "https://code.visualstudio.com/",
      popular: true,
    },
    {
      id: 2,
      title: "Next.js",
      description:
        "The React framework for production that gives you the best developer experience.",
      image: "/next.svg",
      category: "Framework",
      link: "https://nextjs.org/",
      popular: true,
    },
    {
      id: 3,
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
      image: "/globe.svg",
      category: "CSS",
      link: "https://tailwindcss.com/",
      popular: true,
    },
    {
      id: 4,
      title: "Convex",
      description:
        "A backend platform for developers that combines a database, backend code, and real-time data subscriptions.",
      image: "/vercel.svg",
      category: "Backend",
      link: "https://www.convex.dev/",
      popular: false,
    },
    {
      id: 5,
      title: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
      image: "/file.svg",
      category: "Language",
      link: "https://www.typescriptlang.org/",
      popular: true,
    },
    {
      id: 6,
      title: "ESLint",
      description:
        "A static code analysis tool for identifying problematic patterns in JavaScript code.",
      image: "/window.svg",
      category: "Tool",
      link: "https://eslint.org/",
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Developer Resources
          </h1>
          <p className="text-gray-600">
            Access our comprehensive collection of courses, guides, and tools to
            enhance your web development skills
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Resource tabs */}
            <Tabs defaultValue="courses" className="mb-10">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="courses" className="text-sm">
                  Courses
                </TabsTrigger>
                <TabsTrigger value="guides" className="text-sm">
                  Guides
                </TabsTrigger>
                <TabsTrigger value="tools" className="text-sm">
                  Tools
                </TabsTrigger>
              </TabsList>

              {/* Courses Tab */}
              <TabsContent value="courses">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover"
                    >
                      <div className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-white">
                        <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center mr-4 overflow-hidden">
                          <Image
                            src={course.image}
                            alt={course.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {course.instructor} • {course.level}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 pt-0">
                        <p className="text-gray-600 mb-4">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {course.modules} modules
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                        <Link href={`/resources/courses/${course.id}`}>
                          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                            View Course
                          </Button>
                        </Link>
                      </div>
                      {course.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-amber-500 text-white">
                            Popular
                          </Badge>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Guides Tab */}
              <TabsContent value="guides">
                <div className="grid grid-cols-1 gap-6">
                  {guides.map((guide) => (
                    <Card
                      key={guide.id}
                      className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover flex flex-col md:flex-row"
                    >
                      <div className="relative h-48 md:h-auto md:w-1/4 bg-gray-200">
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-3/4">
                        <div className="flex justify-between items-start">
                          <Badge className="bg-gray-100 text-gray-800 mb-2">
                            {guide.category}
                          </Badge>
                          {guide.popular && (
                            <Badge className="bg-amber-500 text-white">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <Link href={`/resources/guides/${guide.id}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-cyan-600 transition-colors">
                            {guide.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            By {guide.author} • {guide.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            {guide.readTime}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Tools Tab */}
              <TabsContent value="tools">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool) => (
                    <Card
                      key={tool.id}
                      className="overflow-hidden border border-gray-200 rounded-lg shadow-sm card-hover"
                    >
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4 overflow-hidden">
                            <Image
                              src={tool.image}
                              alt={tool.title}
                              width={30}
                              height={30}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-gray-900">
                                {tool.title}
                              </h3>
                              {tool.popular && (
                                <Badge className="bg-amber-500 text-white">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <Badge className="mt-1 bg-gray-100 text-gray-800">
                              {tool.category}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{tool.description}</p>
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                            Visit Website
                          </Button>
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Info section */}
            <Card className="p-6 bg-cyan-50 border-cyan-200 mb-10">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-cyan-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Want to contribute?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Are you an expert in web development? We welcome
                    contributions to our resources. Share your knowledge and
                    help others learn!
                  </p>
                  <Link href="/contribute">
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-500 hover:bg-cyan-50"
                    >
                      Learn How to Contribute
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-gray-900 text-white">
              <div className="flex items-start">
                <Lightbulb className="h-6 w-6 text-cyan-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Get Weekly Developer Tips
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Subscribe to our newsletter and receive weekly tips, guides,
                    and resources to help you become a better developer.
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            </Card>
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
