"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
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
      hasDropdown: true,
    },
  ];

  return (
    <header className="w-full bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-white">IT'S </span>
              <span className="text-cyan-400">FOSS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium flex items-center gap-1"
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-800 border-gray-700">
                      <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                        <Link href="/about">About Us</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                        <Link href="/team">Team</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                        <Link href="/contact">Contact</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Members Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hidden lg:flex text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium items-center gap-1"
                >
                  Members
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/members">Members</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/membership">Membership</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/signup">Signup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/signin">Signin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More menu */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-gray-300 hover:text-white hover:bg-gray-800"
            >
              •••
            </Button>

            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Subscribe button */}
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 text-sm font-medium rounded-md">
              Subscribe
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-gray-800 text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="border-t border-gray-800 pt-4">
                    <Link
                      href="/members"
                      className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium block"
                    >
                      Members
                    </Link>
                    <Link
                      href="/membership"
                      className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium block"
                    >
                      Membership
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-800">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
