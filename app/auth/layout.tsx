import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col">
      <header className="container mx-auto py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/vercel.svg"
            alt="TechDev Logo"
            width={32}
            height={32}
            className="invert"
          />
          <span className="text-xl font-bold text-white">TechDev</span>
        </Link>
      </header>
      <div className="flex-1 flex items-center justify-center">{children}</div>
      <footer className="container mx-auto py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TechDev. All rights reserved.
      </footer>
    </div>
  );
}
