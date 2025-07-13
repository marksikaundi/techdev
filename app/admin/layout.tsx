import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authData = await auth();
  const { userId } = authData;

  if (!userId) {
    redirect("/auth/sign-in");
  }

  return <div className="min-h-screen">{children}</div>;
}
