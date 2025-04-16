import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ReactQueryProvider from "@/components/ReactQueryProvider";

import "@workspace/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panglima Propertindo",
  description: "Property development and management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
