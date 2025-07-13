"use client";

import { ExtendedUserResource } from "@/lib/clerk-adapter";
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
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Shield, Mail, Bell, LogOut } from "lucide-react";

const accountFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  notifications: z.boolean(),
  newsletterFrequency: z.enum(["daily", "weekly", "monthly", "never"]),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountSettings({ user }: { user: ExtendedUserResource }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Use the properties directly from extended user resource
  const defaultValues: Partial<AccountFormValues> = {
    email: user.primaryEmail,
    notifications: user.preferences.notifications,
    newsletterFrequency: user.preferences.newsletterFrequency as "daily" | "weekly" | "monthly" | "never",
  };

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: AccountFormValues) {
    setIsLoading(true);

    try {
      // In a real app, you would make an API call to update user settings
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Account settings updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update account settings");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAccountDelete = async () => {
    try {
      // In a real app, you would make an API call to delete the account
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Account scheduled for deletion");
      router.push("/auth/sign-out");
    } catch (error) {
      toast.error("Failed to delete account");
      console.error(error);
    } finally {
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Email & Communication</h3>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is the email used for account notifications.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2 mt-8 mb-6">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Notifications</h3>
          </div>

          <FormField
            control={form.control}
            name="notifications"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Email Notifications
                  </FormLabel>
                  <FormDescription>
                    Receive email notifications about new blog content and
                    account updates.
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
            name="newsletterFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Newsletter Frequency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  How often would you like to receive our newsletter.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2 mt-8 mb-6">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Security</h3>
          </div>

          <div className="flex justify-between items-center rounded-lg border p-4">
            <div>
              <h4 className="font-medium">Password</h4>
              <p className="text-sm text-muted-foreground">
                Change your password or enable two-factor authentication.
              </p>
            </div>
            <Button
              variant="outline"
              type="button"
              onClick={() =>
                window.open(
                  "https://accounts.clerk.dev/user/security",
                  "_blank"
                )
              }
            >
              Manage
            </Button>
          </div>

          <Button type="submit" disabled={isLoading} className="mt-4">
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Form>

      <div className="border-t pt-6 mt-8">
        <div className="flex items-center gap-2 mb-6">
          <LogOut className="h-5 w-5 text-destructive" />
          <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
        </div>

        <div className="rounded-lg border border-destructive/20 p-4">
          <h4 className="font-medium text-destructive">Delete Account</h4>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            Permanently delete your account and all of your content. This action
            cannot be undone.
          </p>

          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button variant="destructive" type="button">
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleAccountDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
