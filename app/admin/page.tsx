import { Card } from "@/components/ui/card";
import {
  FileText,
  Users,
  MessageSquare,
  Eye,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function AdminDashboard() {
  // Sample analytics data
  const stats = [
    {
      name: "Total Posts",
      value: "54",
      icon: FileText,
      change: "+12%",
      increasing: true,
    },
    {
      name: "Total Users",
      value: "2,485",
      icon: Users,
      change: "+18%",
      increasing: true,
    },
    {
      name: "Comments",
      value: "487",
      icon: MessageSquare,
      change: "+32%",
      increasing: true,
    },
    {
      name: "Page Views",
      value: "28,493",
      icon: Eye,
      change: "+24%",
      increasing: true,
    },
  ];

  // Sample recent posts
  const recentPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js: A Complete Guide for Beginners",
      author: "Mark Sikaundi",
      date: "10 Jul 2025",
      views: 1204,
      comments: 28,
    },
    {
      id: 2,
      title: "5 Essential VS Code Extensions for JavaScript Developers",
      author: "Jane Doe",
      date: "08 Jul 2025",
      views: 986,
      comments: 15,
    },
    {
      id: 3,
      title: "Understanding React Hooks: From useState to useEffect",
      author: "Mark Sikaundi",
      date: "07 Jul 2025",
      views: 1547,
      comments: 42,
    },
    {
      id: 4,
      title: "The Complete Guide to Tailwind CSS in 2025",
      author: "John Smith",
      date: "05 Jul 2025",
      views: 852,
      comments: 9,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-cyan-100 mr-4">
                <stat.icon className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 text-sm font-medium ${
                      stat.increasing ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 border-gray-200 bg-gradient-to-r from-cyan-50 to-white hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-cyan-100 mr-4">
                <FileText className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Create Post</h3>
                <p className="text-sm text-gray-500">
                  Add a new article to your blog
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 border-gray-200 bg-gradient-to-r from-purple-50 to-white hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Manage Categories</h3>
                <p className="text-sm text-gray-500">
                  Organize your content effectively
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 border-gray-200 bg-gradient-to-r from-amber-50 to-white hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-amber-100 mr-4">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">View Analytics</h3>
                <p className="text-sm text-gray-500">
                  Track performance and growth
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent posts */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Posts</h2>
        <Card className="border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Views
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-cyan-600">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{post.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{post.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{post.views}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {post.comments}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
