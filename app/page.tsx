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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 min-h-[600px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Become a Better{" "}
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                With the TechDev Weekly Newsletter, you learn useful programming tips, discover applications, explore new frameworks and stay updated with the latest from tech world
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                    SUBSCRIBE
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Right Content - Penguin Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Penguin SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full drop-shadow-2xl"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Penguin Body */}
                    <ellipse cx="200" cy="280" rx="80" ry="100" fill="#2D3748" />
                    <ellipse cx="200" cy="280" rx="60" ry="80" fill="#FFFFFF" />
                    
                    {/* Penguin Head */}
                    <circle cx="200" cy="150" r="70" fill="#2D3748" />
                    <circle cx="200" cy="150" r="50" fill="#FFFFFF" />
                    
                    {/* Eyes */}
                    <circle cx="185" cy="140" r="8" fill="#000000" />
                    <circle cx="215" cy="140" r="8" fill="#000000" />
                    <circle cx="187" cy="138" r="3" fill="#FFFFFF" />
                    <circle cx="217" cy="138" r="3" fill="#FFFFFF" />
                    
                    {/* Beak */}
                    <polygon points="200,155 190,165 210,165" fill="#F6AD55" />
                    
                    {/* Wings */}
                    <ellipse cx="150" cy="250" rx="25" ry="60" fill="#2D3748" transform="rotate(-20 150 250)" />
                    <ellipse cx="250" cy="250" rx="25" ry="60" fill="#2D3748" transform="rotate(20 250 250)" />
                    
                    {/* Feet */}
                    <ellipse cx="180" cy="360" rx="20" ry="10" fill="#F6AD55" />
                    <ellipse cx="220" cy="360" rx="20" ry="10" fill="#F6AD55" />
                    
                    {/* Hat */}
                    <ellipse cx="200" cy="90" rx="45" ry="8" fill="#2D3748" />
                    <path d="M155 90 Q200 60 245 90 Q200 85 155 90" fill="#2D3748" />
                    <circle cx="180" cy="75" r="4" fill="#4A5568" />
                    <circle cx="200" cy="72" r="4" fill="#4A5568" />
                    <circle cx="220" cy="75" r="4" fill="#4A5568" />
                  </svg>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-5 w-4 h-4 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-5 w-3 h-3 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full"></div>
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
