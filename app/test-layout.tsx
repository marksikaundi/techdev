import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page",
  description: "Testing metadata export",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Test Layout</h1>
      {children}
    </div>
  );
}
