import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import logoImage from "@/assets/images/panglima-propertindo-main-logo.png";

type NavItem = {
  title: string;
  url: string;
};

const navItems: NavItem[] = [
  {
    title: "Beranda",
    url: "/",
  },
  {
    title: "Project",
    url: "#",
  },
  {
    title: "Tentang Kami",
    url: "/about-us",
  },
  {
    title: "Pertanyaan Umum",
    url: "/faq",
  },
  {
    title: "Cara Booking",
    url: "/booking",
  },
];

export function MobileSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center justify-center">
          <Image
            src={logoImage}
            alt="Panglima Propertindo"
            width={156}
            height={70}
            priority
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((navItem, navIdx) => (
          <SidebarMenu key={`${navItem.title}-${navIdx}`}>
            <SidebarMenuItem key={navItem.title}>
              <SidebarMenuButton asChild isActive={pathname === navItem.url}>
                <a href={navItem.url}>{navItem.title}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
        <div className="flex items-center space-x-4 p-2">
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
      </SidebarContent>
    </Sidebar>
  );
}
