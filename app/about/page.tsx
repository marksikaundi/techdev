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
      role: "Content Director",
      image: "/globe.svg",
      bio: "Technical writer and educator with a passion for making complex topics accessible.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    {
      name: "John Smith",
      role: "Technical Editor",
      image: "/file.svg",
      bio: "Full-stack developer and technical reviewer ensuring the accuracy of our content.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  ];

  // Stats
  const stats = [
    {
      title: "Articles",
      value: "500+",
      icon: BookOpen,
      description: "In-depth tutorials and guides",
    },
    {
      title: "Resources",
      value: "200+",
      icon: Code,
      description: "Tools, libraries, and frameworks",
    },
    {
      title: "Community",
      value: "25K+",
      icon: Users,
      description: "Active community members",
    },
    {
      title: "Experience",
      value: "10+",
      icon: Calendar,
      description: "Years of web development",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Hero section */}
            <div className="mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About TechDev
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                TechDev is dedicated to making you a better web developer through
                practical tutorials, in-depth guides, and the latest insights on
                web development technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Join Our Community
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Our story */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  TechDev was founded in 2022 with a simple mission: to create a
                  platform where developers of all levels could learn and grow
                  their skills in web development.
                </p>
                <p>
                  What started as a small blog has grown into a comprehensive
                  resource hub for web developers, offering tutorials, guides,
                  courses, and a supportive community.
                </p>
                <p>
                  Our team of experienced developers and technical writers work
                  tirelessly to ensure that our content is accurate,
                  up-to-date, and easy to understand. We believe that learning
                  should be accessible to everyone, regardless of their
                  background or experience level.
                </p>
                <p>
                  Today, TechDev is proud to serve a global community of
                  developers, helping them navigate the ever-changing landscape
                  of web development technologies and practices.
                </p>
              </div>
            </div>

            {/* Mission and Values */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission & Values
              </h2>
              <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower developers by providing high-quality, accessible
                  educational content that helps them build better web
                  applications and advance their careers.
                </p>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-cyan-200 bg-cyan-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Quality
                  </h3>
                  <p className="text-gray-600">
                    We are committed to creating accurate, well-researched, and
                    up-to-date content that provides real value to our readers.
                  </p>
                </Card>
                <Card className="p-6 border-cyan-200 bg-cyan-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Accessibility
                  </h3>
                  <p className="text-gray-600">
                    We strive to make complex concepts approachable and
                    understandable for developers at all skill levels.
                  </p>
                </Card>
                <Card className="p-6 border-cyan-200 bg-cyan-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Community
                  </h3>
                  <p className="text-gray-600">
                    We believe in fostering a supportive and inclusive community
                    where developers can learn from each other.
                  </p>
                </Card>
                <Card className="p-6 border-cyan-200 bg-cyan-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-600">
                    We embrace and share the latest technologies and best
                    practices in web development.
                  </p>
                </Card>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                TechDev by the Numbers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="p-6 border border-gray-200 bg-white text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-cyan-100 p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-cyan-600" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      {stat.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {stat.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border border-gray-200"
                  >
                    <div className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-cyan-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-3">
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-500 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-500 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-500 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <Card className="p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Contact Us
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Have questions, feedback, or just want to say hello? We'd
                      love to hear from you!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-cyan-500 mr-3" />
                        <a
                          href="mailto:info@techdev.com"
                          className="text-gray-700 hover:text-cyan-600"
                        >
                          info@techdev.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Twitter className="h-5 w-5 text-cyan-500 mr-3" />
                        <a
                          href="https://twitter.com/techdev"
                          className="text-gray-700 hover:text-cyan-600"
                        >
                          @techdev
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-cyan-500 mr-3" />
                        <span className="text-gray-700">
                          San Francisco, CA
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Join Our Community
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Connect with other developers, ask questions, and share
                      your knowledge in our growing community.
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                        Join Discord Community
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        Follow Us on Twitter
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
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
