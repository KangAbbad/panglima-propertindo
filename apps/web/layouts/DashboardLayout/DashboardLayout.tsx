import { UserCircle } from "lucide-react";
import { DashboardSidebar } from "./Sidebar";

import {
  SidebarDashboardTrigger,
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { Button } from "@workspace/ui/components/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-20 border-b border-[#E4E4E7] shrink-0 flex items-center gap-2 bg-background h-[84px] transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-[84px]">
          <div className="flex items-center justify-between gap-2 w-full px-4">
            <SidebarDashboardTrigger className="-ml-1" />
            <Button
              variant="ghost"
              className="flex items-center gap-2 cursor-pointer"
            >
              <UserCircle size={16} color="#FA9500" />
              <span className="text-[#FA9500] text-sm">Nama User</span>
            </Button>
          </div>
        </header>
        <section className="bg-[#EEEEEE] h-full p-5">{children}</section>
      </SidebarInset>
    </SidebarProvider>
  );
}
