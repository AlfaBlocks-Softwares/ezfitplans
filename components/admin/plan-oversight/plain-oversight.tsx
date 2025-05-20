import { mockAdminApprovals, mockComplianceClients } from "@/constants";
import ApprovalRequestsTable from "./approvaltable";
import AdminComplianceTable from "./compliancetable";

const AdminPlainOverSight = () => {
  return (
    <main className="h-full min-h-[88dvh] w-full flex flex-col gap-3">
      <section className="w-full h-full bg-primary rounded-xl p-3 flex justify-center items-start">
        <ApprovalRequestsTable approvals={mockAdminApprovals} />
      </section>
      <section className="w-full h-full bg-primary rounded-xl p-3 flex justify-center items-start">
        <AdminComplianceTable compliance={mockComplianceClients} />
      </section>
    </main>
  );
};

export default AdminPlainOverSight;
