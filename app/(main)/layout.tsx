"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
