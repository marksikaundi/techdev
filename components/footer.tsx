import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Youtube,
  MessageCircle,
  Rss,
  Send,
} from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { title: "📰 News", href: "/news" },
    { title: "📺 YouTube", href: "/youtube" },
    { title: "📧 Newsletter", href: "/newsletter" },
    { title: "🧩 Quizzes & Puzzles", href: "/quizzes" },
    { title: "🎒 Resources", href: "/resources" },
    { title: "👥 Community", href: "/community" },
    { title: "💻 About", href: "/about" },
    { title: "📞 Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { title: "Courses 🎓", href: "/courses" },
    { title: "Distro Resources 💻", href: "/distro-resources" },
    { title: "Guides 📚", href: "/guides" },
    { title: "Linux Server Side", href: "/linux-server" },
    { title: "En Español", href: "/espanol" },
    { title: "🗣️ Feedback", href: "/feedback" },
    { title: "Impressum", href: "/impressum" },
    { title: "Terms of use", href: "/terms" },
    { title: "📋 Policies", href: "/policies" },
  ];

  const membershipLinks = [
    { title: "Members", href: "/members" },
    { title: "Membership", href: "/membership" },
    { title: "Signup", href: "/signup" },
    { title: "Signin", href: "/signin" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Rss, href: "#", label: "RSS" },
    { icon: MessageCircle, href: "#", label: "Bluesky" },
    { icon: MessageCircle, href: "#", label: "Mastodon" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Reddit" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Newsletter Subscription - Left Side */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2">
                <span className="text-white">IT'S </span>
                <span className="text-cyan-400">AFRICA</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Making You a Better Linux User
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 flex-1"
                />
                <Button className="bg-gray-200 hover:bg-gray-100 text-gray-900 px-6 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Social</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="text-sm text-gray-500 mb-4 lg:mb-0">
              ©2025 It's AFRICA. Hosted on Digital Ocean & Published with Ghost &
              Rinne.
            </div>

            {/* <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">System</span>
              </div>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                Membership
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
