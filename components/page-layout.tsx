"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      <main className="flex-1">{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
}
