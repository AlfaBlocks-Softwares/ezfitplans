import { mockAdminAnalytics } from "@/constants";
import AdminAnalyticsReportTable from "./analyticstable";

const AdminReportsAndAnalytics = () => {
  return (
    <main className="h-full min-h-[88dvh] w-full flex flex-col gap-3">
      <section className="w-full h-full bg-primary rounded-xl p-3 flex justify-center items-start">
        <AdminAnalyticsReportTable analytics={mockAdminAnalytics} />
      </section>
    </main>
  );
};

export default AdminReportsAndAnalytics;
