import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@workspace/ui/globals.css";
import { Header } from "@/components/landing-page/Header";

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
