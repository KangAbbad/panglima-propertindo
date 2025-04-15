import { LandingLayout } from "@/layouts/LandingLayout/LandingLayout";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingLayout>{children}</LandingLayout>;
}
