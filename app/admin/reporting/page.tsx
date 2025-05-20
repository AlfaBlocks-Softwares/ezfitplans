import AdminReportsAndAnalytics from "@/components/admin/analytics/analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Analytics - EZ Fit Plans",
};

export default function AdminReportsAndAnalyticsPage() {
  return <AdminReportsAndAnalytics />;
}
