"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Save,
  Globe,
  Mail,
  Users,
  Shield,
  FileText,
  Upload,
  Image as ImageIcon,
} from "lucide-react";

// General settings form schema
const generalFormSchema = z.object({
  siteName: z.string().min(1, "Site name is required"),
  siteDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  siteUrl: z.string().url("Please enter a valid URL"),
  logo: z.string().optional(),
  favicon: z.string().optional(),
  postsPerPage: z.coerce.number().int().min(1).max(50),
});

// Email settings form schema
const emailFormSchema = z.object({
  siteEmail: z.string().email("Please enter a valid email"),
  smtpHost: z.string().min(1, "SMTP host is required"),
  smtpPort: z.coerce.number().int().min(1).max(65535),
  smtpUser: z.string().min(1, "SMTP username is required"),
  smtpPassword: z.string().min(1, "SMTP password is required"),
  emailFooter: z.string(),
});

// User settings form schema
const userFormSchema = z.object({
  allowRegistration: z.boolean(),
  allowComments: z.boolean(),
  moderateComments: z.boolean(),
  notifyOnComment: z.boolean(),
  autoApproveComments: z.boolean(),
});

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  // Initialize general form
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Web Dev Insights",
      siteDescription: "Tutorials, guides, and news about web development",
      siteUrl: "https://webdevinsights.com",
      logo: "/logo.svg",
      favicon: "/favicon.ico",
      postsPerPage: 10,
    },
  });

  // Initialize email form
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      siteEmail: "admin@webdevinsights.com",
      smtpHost: "smtp.example.com",
      smtpPort: 587,
      smtpUser: "admin@webdevinsights.com",
      smtpPassword: "••••••••••••",
      emailFooter: "© 2025 Web Dev Insights. All rights reserved.",
    },
  });

  // Initialize user form
  const userForm = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      allowRegistration: true,
      allowComments: true,
      moderateComments: true,
      notifyOnComment: true,
      autoApproveComments: false,
    },
  });

  // Handle general form submission
  function onGeneralSubmit(values: z.infer<typeof generalFormSchema>) {
    console.log(values);
    alert("General settings saved successfully!");
  }

  // Handle email form submission
  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    console.log(values);
    alert("Email settings saved successfully!");
  }

  // Handle user form submission
  function onUserSubmit(values: z.infer<typeof userFormSchema>) {
    console.log(values);
    alert("User settings saved successfully!");
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure your website settings</p>
      </div>

      <Tabs
        defaultValue="general"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-6 bg-gray-100">
          <TabsTrigger value="general" className="data-[state=active]:bg-white">
            <Globe className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="email" className="data-[state=active]:bg-white">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-white">
            <Users className="h-4 w-4 mr-2" />
            Users & Comments
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-white"
          >
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="seo" className="data-[state=active]:bg-white">
            <FileText className="h-4 w-4 mr-2" />
            SEO
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card className="p-6 border-gray-200">
            <Form {...generalForm}>
              <form
                onSubmit={generalForm.handleSubmit(onGeneralSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={generalForm.control}
                  name="siteName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        The name of your website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={generalForm.control}
                  name="siteDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormDescription>
                        A brief description of your website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={generalForm.control}
                  name="siteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site URL</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        The URL of your website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FormField
                      control={generalForm.control}
                      name="logo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Site Logo</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              <div className="h-24 w-48 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden border border-gray-300">
                                {field.value ? (
                                  <img
                                    src={field.value}
                                    alt="Logo"
                                    className="h-full w-full object-contain"
                                  />
                                ) : (
                                  <div className="text-center">
                                    <ImageIcon className="h-8 w-8 mx-auto text-gray-400" />
                                    <span className="text-sm text-gray-500">
                                      No logo
                                    </span>
                                  </div>
                                )}
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                  const url = prompt("Enter logo URL");
                                  if (url) generalForm.setValue("logo", url);
                                }}
                                className="w-full"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Logo
                              </Button>
                            </div>
                          </FormControl>
                          <FormDescription>
                            The logo of your website.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={generalForm.control}
                      name="favicon"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Favicon</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden border border-gray-300">
                                {field.value ? (
                                  <img
                                    src={field.value}
                                    alt="Favicon"
                                    className="h-full w-full object-contain"
                                  />
                                ) : (
                                  <div className="text-center">
                                    <ImageIcon className="h-6 w-6 mx-auto text-gray-400" />
                                    <span className="text-xs text-gray-500">
                                      No icon
                                    </span>
                                  </div>
                                )}
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                  const url = prompt("Enter favicon URL");
                                  if (url) generalForm.setValue("favicon", url);
                                }}
                                className="w-full"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Favicon
                              </Button>
                            </div>
                          </FormControl>
                          <FormDescription>
                            The favicon of your website.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={generalForm.control}
                  name="postsPerPage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Posts Per Page</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        The number of posts to display per page.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save General Settings
                </Button>
              </form>
            </Form>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card className="p-6 border-gray-200">
            <Form {...emailForm}>
              <form
                onSubmit={emailForm.handleSubmit(onEmailSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={emailForm.control}
                  name="siteEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        The primary email address for your website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={emailForm.control}
                    name="smtpHost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Host</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={emailForm.control}
                    name="smtpPort"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Port</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={emailForm.control}
                    name="smtpUser"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={emailForm.control}
                    name="smtpPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SMTP Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={emailForm.control}
                  name="emailFooter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Footer</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} />
                      </FormControl>
                      <FormDescription>
                        The footer text that will appear in all outgoing emails.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Email Settings
                </Button>
              </form>
            </Form>
          </Card>
        </TabsContent>

        {/* Users & Comments Settings */}
        <TabsContent value="users">
          <Card className="p-6 border-gray-200">
            <Form {...userForm}>
              <form
                onSubmit={userForm.handleSubmit(onUserSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    User Registration
                  </h3>
                  <FormField
                    control={userForm.control}
                    name="allowRegistration"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Allow User Registration
                          </FormLabel>
                          <FormDescription>
                            Allow visitors to register on your website.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Comments
                  </h3>
                  <FormField
                    control={userForm.control}
                    name="allowComments"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Allow Comments
                          </FormLabel>
                          <FormDescription>
                            Allow users to comment on posts.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={userForm.control}
                    name="moderateComments"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Moderate Comments
                          </FormLabel>
                          <FormDescription>
                            Moderate comments before they are published.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={userForm.control}
                    name="autoApproveComments"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Auto-approve Comments
                          </FormLabel>
                          <FormDescription>
                            Automatically approve comments from registered
                            users.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={userForm.control}
                    name="notifyOnComment"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Email Notification
                          </FormLabel>
                          <FormDescription>
                            Receive email notifications when a new comment is
                            posted.
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save User Settings
                </Button>
              </form>
            </Form>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card className="p-6 border-gray-200">
            <div className="text-center py-12">
              <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Security Settings
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Security settings are coming soon. This will include options for
                two-factor authentication, API access, and security logging.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card className="p-6 border-gray-200">
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                SEO Settings
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                SEO settings are coming soon. This will include options for meta
                tags, social media integration, and sitemap configuration.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
