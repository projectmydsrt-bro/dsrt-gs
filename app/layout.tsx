import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSRT Simple",
  description: "Next.js 14 + Tailwind starter tanpa error",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
