import AdminPlainOverSight from "@/components/admin/plan-oversight/plain-oversight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Plan Oversight - EZ Fit Plans",
};

export default function AdminPlanOverSightPage() {
  return <AdminPlainOverSight />;
}
