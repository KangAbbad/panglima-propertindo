import {
  SidebarProvider,
  SidebarInset,
} from "@workspace/ui/components/sidebar";
import { MobileSidebar } from "@/components/Header/NavigationLinks";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset>{children}</SidebarInset>
      <MobileSidebar variant="floating" side="right" />
    </SidebarProvider>
  );
}
