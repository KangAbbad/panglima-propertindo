import { AuthNavigationLinks, DesktopNavigationLinks } from "./NavigationLinks";
import { PrimaryLogo } from "./PrimaryLogo";

import { SidebarHamburger } from "@workspace/ui/components/sidebar";

export function Header() {
  return (
    <header className="w-full bg-white py-2">
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
  );
}
