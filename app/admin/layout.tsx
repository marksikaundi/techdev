import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";
import { Toaster } from "@/components/ui/sonner";
import ConvexClientProvider from "@/components/providers/convex-provider";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authData = await auth();
  const { userId } = authData;
  const user = await currentUser();

  if (!userId) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="min-h-screen">
      {/* Override the root layout, with no header/footer */}
      <div className="flex h-screen bg-muted/20">
        <div className="w-64 h-full">
          <AdminSidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <ConvexClientProvider>
            {children}
            <Toaster position="bottom-right" />
          </ConvexClientProvider>
        </div>
      </div>
    </div>
  );
}
