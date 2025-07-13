import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const featuredArticles = [
    {
      title: "Getting Started with Linux for Developers",
      description:
        "A comprehensive guide to setting up your Linux development environment",
      category: "Linux",
      readTime: "8 min read",
      image: "/placeholder-article.jpg",
    },
    {
      title: "10 Essential Terminal Commands Every Developer Should Know",
      description:
        "Master the command line with these powerful terminal commands",
      category: "Terminal",
      readTime: "5 min read",
      image: "/placeholder-article.jpg",
    },
    {
      title: "Building Modern Web Apps with Next.js 15",
      description: "Explore the latest features and improvements in Next.js 15",
      category: "Web Development",
      readTime: "12 min read",
      image: "/placeholder-article.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 min-h-[600px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Become a Better <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Practical tutorials, in-depth guides, and resources to help you
                level up your development skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                  asChild
                >
                  <Link href="/blog">Explore Articles</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Decorative Code Editor */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-700 w-full max-w-md overflow-hidden">
                <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400">
                    terminal@techdev
                  </div>
                </div>
                <div className="p-4 font-mono text-sm text-green-400">
                  <div className="flex">
                    <span className="text-gray-500 mr-2">$</span>
                    <span className="animate-pulse">|</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500 mr-2">$</span>
                    <span className="text-gray-300">npm</span> create{" "}
                    <span className="text-blue-400">next-app@latest</span>
                  </div>
                  <div className="mt-2 text-gray-400">
                    ✓ Project created successfully!
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500 mr-2">$</span>
                    <span className="text-gray-300">cd</span> my-project
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500 mr-2">$</span>
                    <span className="text-gray-300">npm</span> run dev
                  </div>
                  <div className="mt-2 text-gray-400">
                    ✓ Ready in 2.8s
                    <br />◯ Listening on http://localhost:3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Dive into our most popular tutorials and guides
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article, i) => (
              <Card
                key={i}
                className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="font-medium">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-sm">
                    {article.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.description}</p>
                  <div className="mt-6">
                    <Link
                      href="/blog/sample"
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
              asChild
            >
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Find tutorials and guides in your area of interest
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Linux"
              description="Master the command line and learn Linux administration"
              icon="🐧"
              href="/blog/category/linux"
            />
            <CategoryCard
              title="Web Development"
              description="Build modern websites with React, Next.js, and more"
              icon="🌐"
              href="/blog/category/web-development"
            />
            <CategoryCard
              title="DevOps"
              description="Automate your workflows with Docker, Kubernetes, and CI/CD"
              icon="🚀"
              href="/blog/category/devops"
            />
            <CategoryCard
              title="Programming Languages"
              description="Learn Python, JavaScript, TypeScript, and other languages"
              icon="📝"
              href="/blog/category/programming"
            />
            <CategoryCard
              title="Databases"
              description="Master SQL, NoSQL, and database optimization"
              icon="🗃️"
              href="/blog/category/databases"
            />
            <CategoryCard
              title="Security"
              description="Learn how to secure your applications and systems"
              icon="🔒"
              href="/blog/category/security"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-16 sm:px-12 lg:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Join Our Newsletter
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Get the latest tutorials, guides, and news delivered straight
                  to your inbox. We won't spam you, promise!
                </p>
                <div className="mt-10">
                  <form className="sm:flex justify-center">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 text-base text-gray-900 bg-white border-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      placeholder="Enter your email"
                    />
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-800 border border-transparent rounded-r-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm text-blue-100">
                    We care about your data. Read our{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-white underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Category Card Component
function CategoryCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex-shrink-0">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
