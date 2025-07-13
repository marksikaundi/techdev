"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  PenTool,
  Layers,
  Settings,
  Users,
  BarChart,
  FileText,
  Grid,
  LogOut,
  Kanban,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: Grid,
    },
    {
      name: "Posts",
      href: "/admin/posts",
      icon: FileText,
    },
    {
      name: "Create Post",
      href: "/admin/posts/create",
      icon: PenTool,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: Layers,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Studio",
      href: "/admin/studio",
      icon: Kanban,
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-900">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/admin" className="flex-shrink-0">
              <div className="text-xl font-bold">
                <span className="text-white">IT'S </span>
                <span className="text-cyan-400">AFRICA</span>
                <span className="text-white ml-2 text-sm">Admin</span>
              </div>
            </Link>
          </div>
          <div className="mt-8 flex-1 flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-5 w-5 ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="p-4 border-t border-gray-700">
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header */}
        <div className="md:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
          <Link href="/admin" className="flex-shrink-0">
            <div className="text-xl font-bold">
              <span className="text-white">IT'S </span>
              <span className="text-cyan-400">AFRICA</span>
              <span className="text-white ml-2 text-sm">Admin</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <LogOut className="h-6 w-6 text-gray-300" />
            </Link>
          </div>
        </div>

        {/* Mobile navigation dropdown would go here */}

        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
