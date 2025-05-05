import DashboardNavBar from "@/components/dashboardnavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - EZ Fit Plans",
};

export default function CoachDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`bg-dashboard-bg py-[12px] px-[40px]`}>
      <DashboardNavBar />
      {children}
    </main>
  );
}
