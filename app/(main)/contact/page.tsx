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
                We'd love to hear from you. Please fill out the form below or
                reach out to us using the contact information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Email Us
                </h3>
                <p className="text-gray-500 mb-4">For general inquiries</p>
                <a
                  href="mailto:info@techdev.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  info@techdev.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Call Us
                </h3>
                <p className="text-gray-500 mb-4">Mon-Fri from 9am-5pm</p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  +1 (234) 567-890
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Find Us
                </h3>
                <p className="text-gray-500 mb-4">Social media channels</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://twitter.com/techdev"
                    className="text-gray-400 hover:text-blue-500"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/techdev"
                    className="text-gray-400 hover:text-gray-900"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/techdev"
                    className="text-gray-400 hover:text-blue-700"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="p-8 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>

            {/* FAQ section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How can I contribute to TechDev?
                  </h3>
                  <p className="text-gray-600">
                    We welcome contributions from the community. You can submit
                    guest posts, suggest topics, or report issues on our GitHub
                    repository.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Do you offer advertising or sponsorship opportunities?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer various advertising and sponsorship options.
                    Please contact us at sponsors@techdev.com for more
                    information.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How often do you publish new content?
                  </h3>
                  <p className="text-gray-600">
                    We publish new articles and tutorials several times a week.
                    Subscribe to our newsletter to stay updated with our latest
                    content.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Can I request a specific tutorial or topic?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We value your input and try to create content
                    that meets our readers' needs. Use the contact form to
                    suggest topics you'd like us to cover.
                  </p>
                </Card>
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
