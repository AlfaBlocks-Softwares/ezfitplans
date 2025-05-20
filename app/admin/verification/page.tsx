import AdminCoachesVerification from "@/components/admin/verification-flow/verifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Verifications - EZ Fit Plans",
};

export default function AdminVerificationsPage() {
  return <AdminCoachesVerification />;
}
