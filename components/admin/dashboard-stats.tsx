"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, UserCheck, Eye } from "lucide-react";

export function DashboardStats({ userId }: { userId: string }) {
  const allBlogs = useQuery(api.queries.getBlogsByUser, { userId });
  const publishedBlogs = allBlogs?.filter((blog) => blog.published) || [];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Total Blogs"
        value={allBlogs ? allBlogs.length.toString() : "..."}
        description="Blogs created"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
      />
      <DashboardCard
        title="Published"
        value={allBlogs ? publishedBlogs.length.toString() : "..."}
        description="Blogs published"
        icon={<Eye className="h-4 w-4 text-muted-foreground" />}
      />
      <DashboardCard
        title="Active Users"
        value="1"
        description="Users registered"
        icon={<UserCheck className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}

function DashboardCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
