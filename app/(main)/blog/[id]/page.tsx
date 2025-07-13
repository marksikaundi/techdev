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

export default function BlogPostPage({ params }: { params: { id: string } }) {
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
      "Mark is a web developer with over 10 years of experience in building modern web applications.",
    date: "10 Jul 2025",
    readTime: "5 min read",
    category: "Tutorial",
    categoryUrl: "/category/tutorial",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It's a production-ready framework that helps you build fast, user-friendly sites that rank well on search engines.</p>
      
      <p>In this guide, we'll explore the basics of Next.js and how to get started with building your first application. Whether you're a beginner to React or a seasoned developer, Next.js offers a powerful set of tools that can enhance your development workflow.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>There are several reasons why Next.js has become popular among developers:</p>
      
      <ul>
        <li><strong>Server-side rendering (SSR):</strong> Improves performance and SEO by rendering pages on the server.</li>
        <li><strong>Static site generation (SSG):</strong> Pre-renders pages at build time for optimal performance.</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Updates static pages after deployment without rebuilding the entire site.</li>
        <li><strong>Built-in routing:</strong> File-system based routing makes it easy to organize your application.</li>
        <li><strong>API routes:</strong> Create API endpoints within your Next.js application.</li>
        <li><strong>Zero configuration:</strong> Works out of the box with sensible defaults.</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>Let's start by creating a new Next.js project. The easiest way to get started is by using the create-next-app command, which sets up everything automatically for you:</p>
      
      <pre><code>npx create-next-app my-next-app
cd my-next-app
npm run dev</code></pre>
      
      <p>This will create a new Next.js project and start the development server. You can now open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to see your application running.</p>
      
      <h2>Understanding the Project Structure</h2>
      <p>After creating a new Next.js project, you'll notice a few folders and files:</p>
      
      <ul>
        <li><strong>pages/:</strong> Contains all your pages and API routes. Each file in this directory becomes a route in your application.</li>
        <li><strong>public/:</strong> Stores static assets like images, fonts, and other files that need to be served as-is.</li>
        <li><strong>styles/:</strong> Contains CSS files for styling your application.</li>
        <li><strong>next.config.js:</strong> Configuration file for customizing Next.js.</li>
        <li><strong>package.json:</strong> Lists dependencies and scripts for your project.</li>
      </ul>
      
      <h2>Creating Your First Page</h2>
      <p>In Next.js, a page is a React component exported from a file in the pages directory. Let's create a simple page:</p>
      
      <pre><code>// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page for our Next.js application.</p>
    </div>
  )
}</code></pre>
      
      <p>Now if you navigate to <a href="http://localhost:3000/about">http://localhost:3000/about</a>, you'll see your new page.</p>
      
      <h2>Navigating Between Pages</h2>
      <p>Next.js provides a Link component to navigate between pages without full page refreshes:</p>
      
      <pre><code>// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  )
}</code></pre>
      
      <h2>Using Data Fetching Methods</h2>
      <p>Next.js provides several methods for fetching data:</p>
      
      <h3>getStaticProps (Static Site Generation)</h3>
      <pre><code>// pages/blog.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()
  
  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}</code></pre>
      
      <h3>getServerSideProps (Server-side Rendering)</h3>
      <pre><code>// pages/profile.js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/user')
  const user = await res.json()
  
  return {
    props: {
      user,
    },
  }
}

export default function Profile({ user }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  )
}</code></pre>
      
      <h2>API Routes</h2>
      <p>Next.js allows you to create API endpoints within your application:</p>
      
      <pre><code>// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}</code></pre>
      
      <p>This API route can be accessed at <a href="http://localhost:3000/api/hello">http://localhost:3000/api/hello</a>.</p>
      
      <h2>Styling Your Next.js Application</h2>
      <p>Next.js supports several styling methods including CSS Modules, Styled JSX, Tailwind CSS, and more.</p>
      
      <h3>CSS Modules</h3>
      <p>Create a file named styles.module.css:</p>
      
      <pre><code>/* styles/Home.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title {
  color: #0070f3;
  font-size: 2rem;
}</code></pre>
      
      <p>And import it in your component:</p>
      
      <pre><code>// pages/index.js
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
    </div>
  )
}</code></pre>
      
      <h2>Deploying Your Next.js Application</h2>
      <p>Once you're ready to deploy your Next.js application, you have several options:</p>
      
      <ul>
        <li><strong>Vercel:</strong> The easiest way to deploy Next.js, as it's built by the same team.</li>
        <li><strong>Netlify:</strong> Another great option for deploying static sites and serverless functions.</li>
        <li><strong>AWS, Google Cloud, or Azure:</strong> For more complex deployments with custom infrastructure.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful framework for building modern web applications with React. With its built-in features like server-side rendering, static site generation, and API routes, it enables developers to build fast, SEO-friendly applications with a great developer experience.</p>
      
      <p>This guide covered the basics of getting started with Next.js, but there's much more to explore. The <a href="https://nextjs.org/docs">official documentation</a> is an excellent resource for diving deeper into specific features and advanced use cases.</p>
      
      <p>Happy coding!</p>
    `,
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "Mastering TypeScript: Essential Tips and Tricks",
      excerpt:
        "Take your TypeScript skills to the next level with these advanced techniques.",
      image: "/vercel.svg",
      author: "Jane Doe",
      date: "8 Jul 2025",
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
      category: "Backend",
      categoryUrl: "/category/backend",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Article Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-slate-600 text-sm mb-4">
              <div className="flex items-center mr-6 mb-2">
                <UserRound className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              <Link href={post.categoryUrl}>
                <Badge variant="secondary" className="mb-2">
                  {post.category}
                </Badge>
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 flex justify-center bg-slate-100 p-12 rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="h-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-slate max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Share this article:</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-9 w-9 p-0"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-9 w-9 p-0"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-9 w-9 p-0"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-9 w-9 p-0"
              >
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Author Bio */}
          <div className="mb-12 p-6 bg-slate-50 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{post.author}</h3>
                <p className="text-slate-600 text-sm">Author</p>
              </div>
            </div>
            <p className="text-slate-700">{post.authorBio}</p>
          </div>

          {/* Related Posts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block"
                >
                  <div className="border border-slate-200 rounded-lg overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="h-40 bg-slate-100 flex items-center justify-center p-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={120}
                        height={80}
                        className="h-auto object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <UserRound className="h-3 w-3 mr-1" />
                          <span>{relatedPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation between posts */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-200">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Article
            </Button>
            <Button variant="ghost" size="sm">
              Next Article
              <ChevronRight className="ml-2 h-4 w-4" />
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
