import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSRT App",
  description: "Next.js 14 Sederhana dengan Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="w-full p-4 bg-white shadow">
          <h1 className="text-xl font-bold">DSRT</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
