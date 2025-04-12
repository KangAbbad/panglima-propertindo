import { ReactNode } from "react";

import {
  AuthNavigationLinks,
  DesktopNavigationLinks,
  MobileSidebar,
} from "./NavigationLinks";
import { PrimaryLogo } from "./PrimaryLogo";

import {
  SidebarHamburger,
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";

export function Header(): ReactNode {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset>
        <header className="w-full bg-white py-2 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4">
            <PrimaryLogo />
            <DesktopNavigationLinks />
            <div className="hidden md:block">
              <AuthNavigationLinks />
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
