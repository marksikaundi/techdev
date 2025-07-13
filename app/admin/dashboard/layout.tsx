import { AdminSidebar } from "@/components/admin/sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authData = await auth();
  const { userId } = authData;
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex h-screen bg-muted/20">
      <div className="w-64 h-full">
        <AdminSidebar />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
