"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  ConvexProvider as ConvexReactProvider,
  ConvexReactClient,
} from "convex/react";

// Create a Convex client
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  console.error("NEXT_PUBLIC_CONVEX_URL is not defined!");
}

const convex = new ConvexReactClient(convexUrl as string);

export function ConvexProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsConnected(true);
    const handleOffline = () => setIsConnected(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <ConvexReactProvider client={convex}>
      {!isConnected && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          You are offline. Changes will not be saved.
        </div>
      )}
      {children}
    </ConvexReactProvider>
  );
}
