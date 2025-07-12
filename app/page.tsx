import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const featuredArticles = [
    {
      title: "Getting Started with Linux for Developers",
      description: "A comprehensive guide to setting up your Linux development environment",
      category: "Linux",
      readTime: "8 min read",
      image: "/placeholder-article.jpg",
    },
    {
      title: "10 Essential Terminal Commands Every Developer Should Know",
      description: "Master the command line with these powerful terminal commands",
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
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making You a Better{" "}
              <span className="text-cyan-400">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the latest in technology, programming, and development tools.
              Join our community of passionate developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                Start Reading
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                Join Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest tutorials, guides, and insights from the world of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest articles, tutorials, and tech news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "🐧 Linux",
              "💻 Programming",
              "🌐 Web Dev",
              "📱 Mobile",
              "☁️ Cloud",
              "🔒 Security",
              "🤖 AI/ML",
              "📊 Data Science",
              "🛠️ DevOps",
              "🎮 Gaming",
              "🔧 Tools",
              "📚 Tutorials"
            ].map((category) => (
              <Link
                key={category}
                href="#"
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-cyan-500 transition-all"
              >
                <span className="text-sm font-medium text-gray-700">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
