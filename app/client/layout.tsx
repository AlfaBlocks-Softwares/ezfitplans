import ClientNavBar from "@/components/clientnav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client - EZ Fit Plans",
};

export default function ClientDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`bg-dashboard-bg py-[12px] px-[40px]`}>
      <ClientNavBar />
      {children}
    </main>
  );
}
