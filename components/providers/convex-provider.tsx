"use client";

import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/utils";
import { useTheme } from "next-themes";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        appearance={{
          baseTheme: theme === "dark" ? dark : neobrutalism,
          variables: {
            colorPrimary: "hsl(var(--primary))",
          },
          elements: {
            formButtonPrimary:
              "bg-primary hover:bg-primary/90 text-primary-foreground",
            footerActionLink: "text-primary hover:text-primary/90",
          },
        }}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
