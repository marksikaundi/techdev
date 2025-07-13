import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BlogSidebar } from "@/components/blog-sidebar";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Twitter,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Page header */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Contact Us
              </h1>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you. Get in
                touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 border border-gray-200 bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-100 p-3 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-500 mb-3">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:info@techdev.com"
                    className="text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    info@techdev.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-100 p-3 rounded-full mb-4">
                    <MessageSquare className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Live Chat
                  </h3>
                  <p className="text-gray-500 mb-3">
                    Chat with our support team
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Start Chat
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-100 p-3 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-500 mb-3">Our main office location</p>
                  <address className="text-gray-700 not-italic">
                    123 Tech Lane
                    <br />
                    San Francisco, CA 94105
                  </address>
                </div>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="p-8 border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-white border-gray-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Please provide as much detail as possible..."
                    className="bg-white border-gray-300 resize-none"
                  />
                </div>
                <div>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>

            {/* Social media */}
            <Card className="p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media to stay updated with the latest
                articles, tutorials, and tech news.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <a
                  href="#"
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Twitter className="h-8 w-8 text-[#1DA1F2] mb-2" />
                  <span className="text-gray-700 font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Github className="h-8 w-8 text-[#333] mb-2" />
                  <span className="text-gray-700 font-medium">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="h-8 w-8 text-[#0077B5] mb-2" />
                  <span className="text-gray-700 font-medium">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Globe className="h-8 w-8 text-[#FF4500] mb-2" />
                  <span className="text-gray-700 font-medium">Website</span>
                </a>
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
