"use client";
import DashboardNavBar from "@/components/dashboardnavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "User Management", path: "/admin/user-management" },
  { name: "Plan Oversight", path: "/admin/plan-oversight" },
  { name: "Verification Flow", path: "/admin/verification" },
  { name: "Reporting and Analysis", path: "/admin/reporting" },
];

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main
      className={`bg-dashboard-bg py-[12px] px-[40px] flex flex-col gap-3 h-screen`}
    >
      <DashboardNavBar />
      <main className="w-full h-full flex gap-2">
        <div className="h-full w-[325px] bg-secondary-bg text-primary  rounded-xl p-10">
          <ul className="w-full flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li
                  key={item.path}
                  className={`w-[190px] p-3 rounded-xl font-bold text-sm text-primary ${
                    isActive
                      ? "border-1 border-muted text-center"
                      : "hover:border-1 border-muted hover:text-center"
                  }`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {children}
      </main>
    </main>
  );
}
