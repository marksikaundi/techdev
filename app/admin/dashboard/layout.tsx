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

  // No sidebar needed here as it's now in the parent admin layout
  return <>{children}</>;
}
