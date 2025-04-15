"use client";

import { MessagesSquare } from "lucide-react";

import {
  SidebarHeader,
  SidebarContent,
  SidebarRail,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";
import { PrimaryLogo } from "@/components/Header/PrimaryLogo";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { usePathname } from "next/navigation";

const sidebarMenuList = [
  {
    icon: MessagesSquare,
    title: "Feedback",
    href: "/feedback",
  },
];

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-start justify-center bg-white h-[83px]">
        <PrimaryLogo />
      </SidebarHeader>
      <SidebarContent className="border-t border-[#E4E4E7] bg-white">
        <SidebarMenu className="py-4 px-3">
          {sidebarMenuList.map((item, idx) => {
            const isActive = pathname.includes(item.href);
            const activeMenuClass =
              isActive &&
              "text-white bg-primary hover:bg-green-700 hover:text-white";

            return (
              <SidebarMenuItem key={`${item.title}-${idx}`}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      "cursor-pointer h-auto py-2 px-4",
                      activeMenuClass
                    )}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
