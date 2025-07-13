import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard, FileText, Settings } from "lucide-react";

export function AdminSidebar() {
  return (
    <div className="flex flex-col h-full border-r bg-background p-4">
      <div className="flex items-center justify-between mb-8 px-2">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <nav className="space-y-2 flex-1">
        <NavItem
          href="/admin/dashboard"
          icon={<LayoutDashboard className="h-4 w-4" />}
          label="Dashboard"
        />
        <NavItem
          href="/admin/dashboard/blogs"
          icon={<FileText className="h-4 w-4" />}
          label="Blogs"
        />
        <NavItem
          href="/admin/dashboard/settings"
          icon={<Settings className="h-4 w-4" />}
          label="Settings"
        />
      </nav>
      <div className="mt-auto pt-4 border-t">
        <Link
          href="/"
          className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
        >
          Back to Website
        </Link>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
    >
      {icon}
      {label}
    </Link>
  );
}
