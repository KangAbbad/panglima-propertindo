"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { PrimaryLogo } from "./PrimaryLogo";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

export function AuthNavigationLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/"
        className="rounded-md border border-orange-400 text-sm font-medium text-orange-400 hover:bg-black/5 py-2 px-3"
      >
        Daftar
      </Link>
      <Link
        href="/"
        className="rounded-md bg-primary text-sm font-medium text-white hover:bg-green-700 py-2 px-3"
      >
        Masuk
      </Link>
    </div>
  );
}

type NavItem = {
  label: string;
  href: string;
  isDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Project", href: "#projects", isDropdown: true },
  { label: "Tentang Kami", href: "#about-us" },
  { label: "Pertanyaan Umum", href: "#general-faq" },
  { label: "Cara Booking", href: "#booking" },
];

export function DesktopNavigationLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="rounded-sm flex items-center gap-1 text-sm text-foreground hover:bg-black/5 transition-colors py-2 px-3"
        >
          {item.label}
          {item.isDropdown && <ChevronDown size={16} />}
        </Link>
      ))}
    </nav>
  );
}

export function MobileSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <PrimaryLogo />
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((navItem, navIdx) => (
          <SidebarMenu key={`${navItem.label}-${navIdx}`}>
            <SidebarMenuItem key={navItem.label}>
              <SidebarMenuButton asChild isActive={pathname === navItem.href}>
                <Link href={navItem.href}>{navItem.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
        <div className="p-2">
          <AuthNavigationLinks />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
