import { Footer } from "./Footer";
import { MainHeader } from "./Header/MainHeader";

import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { MobileSidebar } from "@/layouts/LandingLayout/Header/NavigationLinks";

export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset>
        <MainHeader />
        {children}
        <Footer />
      </SidebarInset>
      <MobileSidebar variant="floating" side="right" />
    </SidebarProvider>
  );
}
