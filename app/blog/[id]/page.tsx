import Link from "next/link";
import Image from "next/image";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  UserRound,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";

export default function BlogPostPage() {
  // Sample blog post data
  const post = {
    id: 1,
    title: "Getting Started with Next.js: A Complete Guide for Beginners",
    excerpt:
      "Learn the fundamentals of Next.js and start building modern React applications.",
    image: "/next.svg",
    author: "Mark Sikaundi",
    authorImage: "/vercel.svg",
    authorBio:
      "Mark is a senior developer and educator with over 10 years of experience in web development.",
    date: "10 Jul 2025",
    readTime: "5 min read",
    comments: 3,
    category: "Tutorial",
    categoryUrl: "/category/tutorial",
    tags: ["Next.js", "React", "Web Development", "JavaScript", "Frontend"],
    content: `
      <p>Next.js has become one of the most popular React frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and built-in routing, Next.js provides an excellent developer experience while ensuring optimal performance for your users.</p>
      
      <h2>What is Next.js?</h2>
      
      <p>Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features to improve performance and developer experience. Created by Vercel, Next.js has gained significant popularity in the React community due to its robust features and ease of use.</p>
      
      <p>Some of the key features of Next.js include:</p>
      
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>Incremental static regeneration (ISR)</li>
        <li>File-based routing</li>
        <li>API routes</li>
        <li>Built-in CSS and Sass support</li>
        <li>Image optimization</li>
        <li>Fast refresh</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      
      <p>To create a new Next.js project, you can use the <code>create-next-app</code> command, which sets up everything automatically for you. Run the following command in your terminal:</p>
      
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will create a new Next.js project with the name "my-next-app". Once the installation is complete, navigate to your project directory and start the development server:</p>
      
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <p>Your Next.js application should now be running at <code>http://localhost:3000</code>. Open this URL in your browser to see your application in action.</p>
      
      <h2>Understanding the Project Structure</h2>
      
      <p>A typical Next.js project has the following structure:</p>
      
      <pre><code>my-next-app/
├── node_modules/
├── public/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
├── .gitignore
├── next.config.js
├── package.json
└── README.md</code></pre>
      
      <p>Let's go through the key directories and files:</p>
      
      <ul>
        <li><strong>app/</strong>: This is where you put your pages and layouts. Next.js uses file-based routing, so each file in this directory becomes a route in your application.</li>
        <li><strong>public/</strong>: This directory is used for static assets like images, fonts, and other files that need to be served as-is.</li>
        <li><strong>components/</strong>: This is where you can put your React components that will be used across different pages.</li>
        <li><strong>next.config.js</strong>: This file is used for configuring Next.js.</li>
      </ul>
      
      <h2>Creating Your First Page</h2>
      
      <p>In Next.js, each file in the <code>app</code> directory becomes a route. For example, if you create a file at <code>app/about/page.tsx</code>, it will be accessible at <code>/about</code>.</p>
      
      <p>Let's create a simple about page. Create a new file at <code>app/about/page.tsx</code> with the following content:</p>
      
      <pre><code>export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Next.js application.</p>
    </div>
  );
}</code></pre>
      
      <p>Now, if you navigate to <code>http://localhost:3000/about</code>, you should see your about page.</p>
      
      <h2>Conclusion</h2>
      
      <p>Next.js provides a powerful framework for building modern web applications with React. With its features like server-side rendering, static site generation, and file-based routing, Next.js makes it easy to create fast, SEO-friendly applications.</p>
      
      <p>This tutorial covered the basics of getting started with Next.js. There's much more to explore, such as API routes, image optimization, and more advanced features. Stay tuned for more tutorials on Next.js!</p>
    `,
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "Building a RESTful API with Next.js API Routes",
      excerpt:
        "Learn how to create backend API endpoints using Next.js API routes.",
      image: "/next.svg",
      author: "Mark Sikaundi",
      date: "05 Jul 2025",
      category: "Tutorial",
    },
    {
      id: 3,
      title: "Mastering Server Components in Next.js 15",
      excerpt:
        "Explore the power of React Server Components in Next.js applications.",
      image: "/file.svg",
      author: "Jane Doe",
      date: "01 Jul 2025",
      category: "Advanced",
    },
    {
      id: 4,
      title: "Optimizing Images in Next.js with the Image Component",
      excerpt:
        "Learn how to use the built-in Image component for optimized image loading.",
      image: "/globe.svg",
      author: "John Smith",
      date: "28 Jun 2025",
      category: "Performance",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-cyan-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-cyan-600">
                Blog
              </Link>
              <span className="mx-2">›</span>
              <Link href={post.categoryUrl} className="hover:text-cyan-600">
                {post.category}
              </Link>
            </div>

            {/* Post header */}
            <div className="mb-8">
              <Link href={post.categoryUrl} className="inline-block mb-3">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-3 py-1">
                  {post.category}
                </Badge>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={28}
                    height={28}
                    className="rounded-full mr-2"
                  />
                  <Link
                    href={`/author/${post.author
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="font-medium hover:text-cyan-600"
                  >
                    {post.author}
                  </Link>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="mb-8 relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none mb-10">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium px-3 py-1">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Share This Article
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 text-sky-500 hover:text-sky-600 hover:bg-sky-50"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                >
                  <LinkIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Author bio */}
            <div className="mb-10 p-6 bg-gray-100 rounded-lg">
              <div className="flex items-start">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.authorBio}</p>
                  <Link
                    href={`/author/${post.author
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    View all posts by {post.author}
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-10 py-6 border-t border-b border-gray-200">
              <Button
                variant="ghost"
                className="flex items-center text-gray-600 hover:text-cyan-600"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Post
              </Button>
              <Button
                variant="ghost"
                className="flex items-center text-gray-600 hover:text-cyan-600"
              >
                Next Post
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Related posts */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm card-hover"
                  >
                    <div className="relative h-40 bg-gray-200">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-cyan-500 text-white font-medium px-2 py-1 mb-2">
                        {relatedPost.category}
                      </Badge>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <h3 className="text-md font-bold text-gray-900 mb-2 hover:text-cyan-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {relatedPost.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments section placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comments ({post.comments})
              </h2>
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-4">
                  Comments are loading or sign in to comment...
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Sign In to Comment
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
