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
      duration: "4 hours",
      free: true,
    },
    {
      id: 2,
      title: "TypeScript for React Developers",
      description:
        "Master TypeScript and learn how to build type-safe React applications.",
      image: "/vercel.svg",
      level: "Intermediate",
      duration: "6 hours",
      free: false,
      price: "$49",
    },
    {
      id: 3,
      title: "Advanced Node.js Backend Development",
      description:
        "Learn how to build scalable and secure Node.js backends with Express and MongoDB.",
      image: "/file.svg",
      level: "Advanced",
      duration: "8 hours",
      free: false,
      price: "$79",
    },
    {
      id: 4,
      title: "Docker for Web Developers",
      description:
        "Learn how to containerize your web applications for consistent deployment.",
      image: "/globe.svg",
      level: "Intermediate",
      duration: "5 hours",
      free: false,
      price: "$59",
    },
  ];

  const ebooks = [
    {
      id: 1,
      title: "The Complete Guide to Modern CSS",
      description:
        "Master modern CSS techniques including Grid, Flexbox, and CSS Variables.",
      image: "/file.svg",
      pages: 180,
      format: "PDF, EPUB, MOBI",
      free: true,
    },
    {
      id: 2,
      title: "React Design Patterns",
      description:
        "Learn best practices and design patterns for building scalable React applications.",
      image: "/next.svg",
      pages: 220,
      format: "PDF, EPUB",
      free: false,
      price: "$29",
    },
    {
      id: 3,
      title: "Mastering JavaScript Algorithms",
      description:
        "Improve your problem-solving skills with common algorithms implemented in JavaScript.",
      image: "/vercel.svg",
      pages: 250,
      format: "PDF, EPUB, MOBI",
      free: false,
      price: "$39",
    },
  ];

  const tools = [
    {
      id: 1,
      title: "Code Playground",
      description:
        "An interactive environment for testing and sharing HTML, CSS, and JavaScript code.",
      image: "/window.svg",
      category: "Development",
    },
    {
      id: 2,
      title: "API Tester",
      description:
        "A simple tool for testing RESTful APIs without leaving your browser.",
      image: "/file.svg",
      category: "API",
    },
    {
      id: 3,
      title: "Color Palette Generator",
      description:
        "Generate beautiful color palettes for your web projects with one click.",
      image: "/globe.svg",
      category: "Design",
    },
    {
      id: 4,
      title: "Regex Tester",
      description:
        "Test and debug regular expressions with real-time feedback and explanations.",
      image: "/vercel.svg",
      category: "Development",
    },
  ];

  const cheatSheets = [
    {
      id: 1,
      title: "React Hooks Cheat Sheet",
      description:
        "A quick reference guide for all React Hooks and their common usage patterns.",
      image: "/next.svg",
      downloadLink: "#",
    },
    {
      id: 2,
      title: "CSS Grid & Flexbox Cheat Sheet",
      description:
        "A visual guide to CSS Grid and Flexbox properties and their effects.",
      image: "/file.svg",
      downloadLink: "#",
    },
    {
      id: 3,
      title: "Git Command Cheat Sheet",
      description:
        "A comprehensive list of the most commonly used Git commands and their options.",
      image: "/vercel.svg",
      downloadLink: "#",
    },
    {
      id: 4,
      title: "JavaScript Array Methods Cheat Sheet",
      description:
        "A reference for all JavaScript array methods with examples and use cases.",
      image: "/globe.svg",
      downloadLink: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
            <p className="text-lg text-slate-600">
              Discover our curated collection of resources to help you improve
              your programming skills and stay updated with the latest
              technologies.
            </p>
          </div>

          {/* Resources Tabs */}
          <Tabs defaultValue="courses" className="mb-12">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="courses" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="ebooks" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                eBooks
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center">
                <Terminal className="h-4 w-4 mr-2" />
                Tools
              </TabsTrigger>
              <TabsTrigger value="cheatsheets" className="flex items-center">
                <Code className="h-4 w-4 mr-2" />
                Cheat Sheets
              </TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <h2 className="text-2xl font-bold mb-6">
                Featured Online Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden h-full">
                    <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={120}
                        height={80}
                        className="h-auto object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <Badge variant={course.free ? "default" : "secondary"}>
                          {course.free ? "Free" : course.price}
                        </Badge>
                      </div>
                      <p className="text-slate-600 mb-4">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="flex items-center">
                          <Info className="h-3 w-3 mr-1" />
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {course.duration}
                        </Badge>
                      </div>
                      <Button className="w-full">View Course</Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">View All Courses</Button>
              </div>
            </TabsContent>

            {/* eBooks Tab */}
            <TabsContent value="ebooks">
              <h2 className="text-2xl font-bold mb-6">eBooks & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ebooks.map((ebook) => (
                  <Card key={ebook.id} className="overflow-hidden h-full">
                    <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                      <Image
                        src={ebook.image}
                        alt={ebook.title}
                        width={80}
                        height={120}
                        className="h-auto object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">{ebook.title}</h3>
                        <Badge variant={ebook.free ? "default" : "secondary"}>
                          {ebook.free ? "Free" : ebook.price}
                        </Badge>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm">
                        {ebook.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 text-xs">
                        <Badge variant="outline" className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {ebook.pages} pages
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Info className="h-3 w-3 mr-1" />
                          {ebook.format}
                        </Badge>
                      </div>
                      <Button className="w-full" size="sm">
                        {ebook.free ? "Download" : "Purchase"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">View All eBooks</Button>
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools">
              <h2 className="text-2xl font-bold mb-6">Developer Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className="overflow-hidden h-full">
                    <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        width={100}
                        height={100}
                        className="h-auto object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{tool.title}</h3>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </div>
                      <p className="text-slate-600 mb-4">{tool.description}</p>
                      <Button className="w-full">Try It Now</Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">View All Tools</Button>
              </div>
            </TabsContent>

            {/* Cheat Sheets Tab */}
            <TabsContent value="cheatsheets">
              <h2 className="text-2xl font-bold mb-6">
                Downloadable Cheat Sheets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cheatSheets.map((sheet) => (
                  <Card key={sheet.id} className="overflow-hidden h-full">
                    <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                      <Image
                        src={sheet.image}
                        alt={sheet.title}
                        width={100}
                        height={100}
                        className="h-auto object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{sheet.title}</h3>
                      <p className="text-slate-600 mb-4">{sheet.description}</p>
                      <Button asChild className="w-full" variant="outline">
                        <Link href={sheet.downloadLink}>
                          <FileText className="mr-2 h-4 w-4" />
                          Download PDF
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">View All Cheat Sheets</Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Resource Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Resource Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-3">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-sm text-slate-500">24 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-600 mb-3">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Backend</h3>
                <p className="text-sm text-slate-500">18 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full text-purple-600 mb-3">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Databases</h3>
                <p className="text-sm text-slate-500">12 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full text-orange-600 mb-3">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">DevOps</h3>
                <p className="text-sm text-slate-500">15 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full text-red-600 mb-3">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">CLI Tools</h3>
                <p className="text-sm text-slate-500">9 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full text-yellow-600 mb-3">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">AI & ML</h3>
                <p className="text-sm text-slate-500">7 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-cyan-100 rounded-full text-cyan-600 mb-3">
                  <Coffee className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">Career</h3>
                <p className="text-sm text-slate-500">11 resources</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full text-slate-600 mb-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">All Topics</h3>
                <p className="text-sm text-slate-500">96 resources</p>
              </Card>
            </div>
          </div>

          {/* Resource Request */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              Can't find what you need?
            </h2>
            <p className="text-slate-600 mb-4">
              If you're looking for a specific resource that's not available
              yet, let us know and we'll consider adding it to our collection.
            </p>
            <Button asChild>
              <Link href="/contact">Request a Resource</Link>
            </Button>
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
