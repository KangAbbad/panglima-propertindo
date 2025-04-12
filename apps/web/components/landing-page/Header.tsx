import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import logoImage from "@/assets/images/panglima-propertindo-main-logo.png";
import {
  SidebarHamburger,
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { MobileSidebar } from "./MobileSidebar";

interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Project", href: "/project", isDropdown: true },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Pertanyaan Umum", href: "/faq" },
  { label: "Cara Booking", href: "/cara-booking" },
];

export function Header(): ReactNode {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset>
        <header className="w-full bg-white py-2 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link href="/" className="flex items-center">
              <Image
                src={logoImage}
                alt="Panglima Propertindo"
                width={156}
                height={70}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.isDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className="rounded-md border border-orange-400 text-sm font-medium text-orange-400 hover:bg-orange-50 py-2 px-3"
              >
                Daftar
              </Link>
              <Link
                href="/"
                className="rounded-md bg-primary text-sm font-medium text-white hover:bg-green-800 py-2 px-3"
              >
                Masuk
              </Link>
            </div>

            <div className="md:hidden flex pr-2">
              <SidebarHamburger />
            </div>
          </div>
        </header>
      </SidebarInset>
      <MobileSidebar variant="floating" side="right" />
    </SidebarProvider>
  );
}
