"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const siteSettingsSchema = z.object({
  siteName: z.string().min(2, {
    message: "Site name must be at least 2 characters.",
  }),
  siteDescription: z.string().max(500, {
    message: "Site description must not exceed 500 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  enableRegistration: z.boolean(),
  defaultTheme: z.enum(["light", "dark", "system"]),
  footerText: z.string().max(200, {
    message: "Footer text must not exceed 200 characters.",
  }),
});

type SiteSettingsValues = z.infer<typeof siteSettingsSchema>;

export function SiteSettings({ userId }: { userId: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // In a real app, you would fetch the site settings from your database
  // For this demo, we'll use default values
  const defaultValues: SiteSettingsValues = {
    siteName: "TechDev",
    siteDescription: "A modern tech blog to help you become a better developer",
    contactEmail: "contact@techdev.blog",
    enableRegistration: true,
    defaultTheme: "system",
    footerText: "© 2025 TechDev. All rights reserved.",
  };

  const form = useForm<SiteSettingsValues>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: SiteSettingsValues) {
    setIsLoading(true);

    try {
      // In a real app, you would save these settings to your database
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Site settings updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update site settings");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="siteName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Site Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your site name" {...field} />
                </FormControl>
                <FormDescription>
                  This will be displayed in the site header and browser title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="siteDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Site Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="A brief description of your site"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This will be used for SEO and meta descriptions.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email</FormLabel>
                <FormControl>
                  <Input placeholder="contact@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  This email will be used for contact forms and system
                  notifications.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="defaultTheme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Default Theme</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System Default</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Default color theme for your website visitors.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="enableRegistration"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">User Registration</FormLabel>
                  <FormDescription>
                    Allow new users to register on your website.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="footerText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Footer Text</FormLabel>
                <FormControl>
                  <Input placeholder="Copyright text" {...field} />
                </FormControl>
                <FormDescription>
                  Text displayed in the footer of your website.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
