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
  Send
} from "lucide-react";

export function Footer() {
  const navigationLinks = [
    {
      title: "📰 News",
      href: "/news",
    },
    {
      title: "📺 YouTube",
      href: "/youtube",
    },
    {
      title: "📧 Newsletter",
      href: "/newsletter",
    },
    {
      title: "🧩 Quizzes & Puzzles",
      href: "/quizzes",
    },
    {
      title: "🎒 Resources",
      href: "/resources",
    },
    {
      title: "👥 Community",
      href: "/community",
    },
    {
      title: "💻 About",
      href: "/about",
    },
    {
      title: "📞 Contact",
      href: "/contact",
    },
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
        {/* Newsletter Subscription */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-white">IT'S </span>
                <span className="text-cyan-400">FOSS</span>
              </div>
              <p className="text-gray-400 text-sm">Making You a Better Linux User</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Membership</h3>
            <ul className="space-y-2">
              {membershipLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Social</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1"
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
              ©2025 It's FOSS. Hosted on Digital Ocean & Published with Ghost & Rinne.
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">🌟 System</span>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                👤 Membership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
