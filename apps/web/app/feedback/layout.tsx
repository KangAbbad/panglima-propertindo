import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
