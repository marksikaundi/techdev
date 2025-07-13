"use client";

import { SignUp } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignUpPage() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            baseTheme: theme === "dark" ? dark : neobrutalism,
            variables: {
              colorPrimary: "hsl(var(--primary))",
            },
            elements: {
              formButtonPrimary:
                "bg-primary hover:bg-primary/90 text-primary-foreground",
              footerActionLink: "text-primary hover:text-primary/90",
              card: "bg-card shadow-lg",
            },
          }}
          routing="path"
          path="/auth/sign-up"
          redirectUrl="/admin/dashboard"
          signInUrl="/auth/sign-in"
        />
      </div>
    </div>
  );
}
