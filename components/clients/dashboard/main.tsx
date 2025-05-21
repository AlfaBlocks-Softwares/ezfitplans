import ClientProgressTracking from "./progress";
import ActivePlanCard from "./activeplancard";
import ClientAssignedPlan from "./assignedplans";
import WelcomeCard from "./profilecard";
import ProgressTrackingChart from "./chart";

export default function ClientDashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-4 my-3">
      <WelcomeCard name="John Doe" subscription="Premium" />
      <div className="w-full h-full flex flex-row gap-4">
        <div className="w-1/2 h-full flex flex-col gap-4">
          <ActivePlanCard
            title="Active Diet Plan"
            planName="Keto Meal Plan"
            startDate="01-11-25"
            endDate="08-11-25"
          />
          <ActivePlanCard
            title="Active Workout Plan"
            planName="Keto Meal Plan"
            startDate="01-11-25"
            endDate="08-11-25"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4 bg-primary-bg rounded-2xl p-6 h-[490px]">
          <ProgressTrackingChart />
        </div>
      </div>
      <ClientAssignedPlan />
      <ClientProgressTracking />
    </div>
  );
}
