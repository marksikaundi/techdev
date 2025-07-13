import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogSidebar } from "@/components/blog-sidebar";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Users,
  BookOpen,
  Code,
  Globe,
  Calendar,
} from "lucide-react";

export default function AboutPage() {
  // Team members
  const teamMembers = [
    {
      name: "Mark Sikaundi",
      role: "Founder & Lead Developer",
      image: "/vercel.svg",
      bio: "Web developer with over 10 years of experience in building modern web applications.",
      twitter: "https://twitter.com/marksikaundi",
      github: "https://github.com/marksikaundi",
      linkedin: "https://linkedin.com/in/marksikaundi",
    },
    {
      name: "Jane Doe",
      role: "Content Writer & SEO Specialist",
      image: "/next.svg",
      bio: "SEO expert with a passion for creating engaging content that ranks well on search engines.",
      twitter: "https://twitter.com/janedoe",
      github: "https://github.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
    {
      name: "John Smith",
      role: "UI/UX Designer",
      image: "/file.svg",
      bio: "Designer focused on creating beautiful and functional user interfaces for web and mobile applications.",
      twitter: "https://twitter.com/johnsmith",
      github: "https://github.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
    },
    {
      name: "Sarah Johnson",
      role: "Technical Writer",
      image: "/globe.svg",
      bio: "Technical writer specializing in creating clear and concise documentation for developers.",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  ];

  // Stats data
  const stats = [
    {
      value: "100+",
      label: "Articles Published",
      icon: BookOpen,
    },
    {
      value: "50K+",
      label: "Monthly Readers",
      icon: Users,
    },
    {
      value: "500+",
      label: "Code Snippets",
      icon: Code,
    },
    {
      value: "15+",
      label: "Countries Reached",
      icon: Globe,
    },
    {
      value: "5+",
      label: "Years of Publishing",
      icon: Calendar,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">About TechDev</h1>
            <p className="text-lg text-slate-700 mb-8">
              TechDev is a modern tech blog dedicated to making you a better
              developer through in-depth articles, tutorials, and resources. Our
              mission is to provide high-quality content that helps developers at
              all levels improve their skills and stay up-to-date with the latest
              trends in the tech industry.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <Card className="p-6">
              <p className="mb-4">
                TechDev was founded in 2020 by Mark Sikaundi, a passionate
                developer who wanted to share his knowledge and experience with
                others. What started as a personal blog has grown into a
                community of developers helping each other learn and grow.
              </p>
              <p className="mb-4">
                We believe that technology should be accessible to everyone, and
                that's why we strive to create content that's both informative
                and easy to understand. Our team of writers and developers are
                dedicated to breaking down complex topics into digestible pieces
                that anyone can understand.
              </p>
              <p>
                Over the years, we've helped thousands of developers improve
                their skills and advance their careers. We're proud of what we've
                accomplished, but we're just getting started. We have big plans
                for the future, and we can't wait to share them with you.
              </p>
            </Card>
          </div>

          {/* Our Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 relative mr-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-slate-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <Link href={member.twitter}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-8 w-8 rounded-full"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={member.github}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-8 w-8 rounded-full"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={member.linkedin}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-8 w-8 rounded-full"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">TechDev by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <Card className="p-6">
              <ul className="space-y-4">
                <li>
                  <strong>Quality over Quantity</strong> - We believe in
                  publishing fewer, but more comprehensive articles that provide
                  real value to our readers.
                </li>
                <li>
                  <strong>Accessibility</strong> - We strive to make complex
                  technical topics accessible to developers at all levels.
                </li>
                <li>
                  <strong>Community</strong> - We're building a community of
                  developers who help each other learn and grow.
                </li>
                <li>
                  <strong>Practicality</strong> - We focus on practical
                  knowledge that you can apply to your projects right away.
                </li>
                <li>
                  <strong>Continuous Learning</strong> - We're always learning
                  and improving, just like our readers.
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <Card className="p-6">
              <p className="mb-4">
                We'd love to hear from you! Whether you have a question, a
                suggestion, or just want to say hello, don't hesitate to reach
                out.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Link href="mailto:info@techdev.com">
                    <Mail className="mr-2 h-4 w-4" /> Email Us Directly
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-slate-600">
                Follow us on social media for the latest updates and behind the
                scenes content.
              </p>
              <div className="flex space-x-3 mt-2">
                <Link href="https://twitter.com/techdev">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8 rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/techdev">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8 rounded-full"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/techdev">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8 rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
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
