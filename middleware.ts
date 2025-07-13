import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define route patterns
const isAdminRoute = createRouteMatcher(["/admin/(.*)"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/auth/sign-in/(.*)",
  "/auth/sign-up/(.*)",
  "/auth/sign-out/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect admin routes
  if (isAdminRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/(api|trpc)(.*)",
  ],
};
