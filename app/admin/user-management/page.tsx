import UserManagement from "@/components/admin/user-management/usermanagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - EZ Fit Plans",
};

export default function AdminUserManagement() {
  return <UserManagement />;
}
