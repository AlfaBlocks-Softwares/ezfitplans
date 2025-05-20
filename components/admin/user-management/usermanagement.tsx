import { adminDashboardStats, mockClients } from "@/constants";
import AdminDashboardStatCard from "./admindashboardanalyticscard";
import AdminClientsTable from "./clientstable";

const UserManagement = () => {
  return (
    <main className="h-full min-h-[88dvh] w-full flex flex-col gap-3">
      <div className="w-full grid grid-cols-3 gap-4">
        {adminDashboardStats?.map((itm) => (
          <AdminDashboardStatCard
            title={itm?.title}
            value={itm?.value}
            change={itm?.change}
          />
        ))}
      </div>
      <section className="w-full h-full bg-primary rounded-xl p-3 flex justify-center items-start">
        <AdminClientsTable clients={mockClients} />
      </section>
    </main>
  );
};

export default UserManagement;
