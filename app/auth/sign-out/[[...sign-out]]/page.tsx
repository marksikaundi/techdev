import { SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Out | TechDev",
  description: "Sign out from your TechDev account",
};

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] gap-8">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md border">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Out</h1>
        <p className="text-center text-muted-foreground mb-8">
          Are you sure you want to sign out?
        </p>
        <div className="flex flex-col gap-4">
          <SignOutButton>
            <Button className="w-full" variant="destructive">
              Yes, sign me out
            </Button>
          </SignOutButton>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">No, take me back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
