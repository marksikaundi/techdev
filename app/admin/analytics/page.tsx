"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  ArrowUpRight,
  FileText,
} from "lucide-react";

export default function AdminAnalytics() {
  // Sample data for the visitor chart
  const visitorData = [
    { name: "Jun 25", visitors: 1200, pageViews: 3400 },
    { name: "Jun 26", visitors: 1300, pageViews: 3600 },
    { name: "Jun 27", visitors: 1400, pageViews: 3800 },
    { name: "Jun 28", visitors: 1100, pageViews: 3100 },
    { name: "Jun 29", visitors: 1500, pageViews: 4100 },
    { name: "Jun 30", visitors: 1700, pageViews: 4700 },
    { name: "Jul 1", visitors: 1600, pageViews: 4300 },
    { name: "Jul 2", visitors: 1800, pageViews: 4900 },
    { name: "Jul 3", visitors: 1900, pageViews: 5200 },
    { name: "Jul 4", visitors: 2100, pageViews: 5800 },
    { name: "Jul 5", visitors: 2000, pageViews: 5500 },
    { name: "Jul 6", visitors: 2200, pageViews: 6000 },
    { name: "Jul 7", visitors: 2300, pageViews: 6400 },
    { name: "Jul 8", visitors: 2400, pageViews: 6700 },
  ];

  // Sample data for the popular posts chart
  const popularPostsData = [
    {
      name: "Getting Started with Next.js",
      views: 5840,
    },
    {
      name: "React Hooks Explained",
      views: 4350,
    },
    {
      name: "CSS Grid Tutorial",
      views: 3820,
    },
    {
      name: "TypeScript Best Practices",
      views: 3210,
    },
    {
      name: "VS Code Extensions",
      views: 2950,
    },
  ];

  // Sample data for the traffic sources pie chart
  const trafficSourcesData = [
    { name: "Organic Search", value: 45 },
    { name: "Direct", value: 25 },
    { name: "Social Media", value: 18 },
    { name: "Referral", value: 12 },
  ];

  // Sample data for the device breakdown
  const deviceData = [
    { name: "Desktop", value: 65 },
    { name: "Mobile", value: 30 },
    { name: "Tablet", value: 5 },
  ];

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Sample referrers data
  const referrers = [
    { source: "Google", visits: 3245, change: "+12%" },
    { source: "Twitter", visits: 1432, change: "+8%" },
    { source: "GitHub", visits: 987, change: "+15%" },
    { source: "YouTube", visits: 654, change: "-3%" },
    { source: "Facebook", visits: 542, change: "+5%" },
    { source: "Reddit", visits: 321, change: "+2%" },
  ];

  // Sample popular pages data
  const popularPages = [
    {
      page: "/blog/getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      views: 5840,
      avgTime: "4:23",
    },
    {
      page: "/blog/react-hooks-explained",
      title: "React Hooks Explained",
      views: 4350,
      avgTime: "5:12",
    },
    {
      page: "/blog/css-grid-tutorial",
      title: "CSS Grid Tutorial",
      views: 3820,
      avgTime: "3:45",
    },
    {
      page: "/blog/typescript-best-practices",
      title: "TypeScript Best Practices",
      views: 3210,
      avgTime: "6:08",
    },
    {
      page: "/blog/vs-code-extensions",
      title: "VS Code Extensions",
      views: 2950,
      avgTime: "2:56",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Monitor your website performance</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Visitors</p>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">24,521</h3>
                <span className="ml-2 text-xs text-green-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 12%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Page Views</p>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">67,432</h3>
                <span className="ml-2 text-xs text-green-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 8%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-cyan-100 text-cyan-600">
              <Eye className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Bounce Rate</p>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">32.8%</h3>
                <span className="ml-2 text-xs text-red-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 3%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-amber-100 text-amber-600">
              <MousePointer className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Visit Time</p>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">3:42</h3>
                <span className="ml-2 text-xs text-green-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 5%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <Clock className="h-5 w-5" />
            </div>
          </div>
        </Card>
      </div>

      {/* Chart tabs */}
      <Tabs defaultValue="visitors" className="mb-6">
        <TabsList className="mb-4 bg-gray-100">
          <TabsTrigger
            value="visitors"
            className="data-[state=active]:bg-white"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Visitors
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-white">
            <FileText className="h-4 w-4 mr-2" />
            Content
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-white">
            <Globe className="h-4 w-4 mr-2" />
            Traffic Sources
          </TabsTrigger>
        </TabsList>

        {/* Visitors chart */}
        <TabsContent value="visitors">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Visitors Overview
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visitorData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#0891b2"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#6366f1"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        {/* Content performance */}
        <TabsContent value="content">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Top Performing Content
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={popularPostsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#0891b2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        {/* Traffic sources */}
        <TabsContent value="sources">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Traffic Sources
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficSourcesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSourcesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6 border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Device Breakdown
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Referrers */}
        <Card className="border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Referrers</h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>Visits</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrers.map((referrer) => (
                  <TableRow key={referrer.source}>
                    <TableCell className="font-medium">
                      {referrer.source}
                    </TableCell>
                    <TableCell>{referrer.visits}</TableCell>
                    <TableCell
                      className={
                        referrer.change.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {referrer.change}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Popular pages */}
        <Card className="border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Popular Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Avg. Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularPages.map((page) => (
                  <TableRow key={page.page}>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      <div className="truncate">{page.title}</div>
                      <div className="text-xs text-gray-500 truncate">
                        {page.page}
                      </div>
                    </TableCell>
                    <TableCell>{page.views}</TableCell>
                    <TableCell>{page.avgTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}
