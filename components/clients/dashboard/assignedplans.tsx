import { IAssignedPlan } from "@/types/coach";
import ClientAssignedPlansTable from "./assignedtable";

export const dummyPlans: IAssignedPlan[] = [
  {
    key: "1",
    clientName: "John",
    email: "john@example.com",
    assignedPlan: "Diet Plan",
    startDate: "12-02-2025",
    endDate: "12-02-2025",
    status: "Active",
  },
  {
    key: "2",
    clientName: "Alan",
    email: "alan@example.com",
    assignedPlan: "Workout Plan",
    startDate: "12-02-2025",
    endDate: "12-02-2025",
    status: "Expired",
  },
  {
    key: "3",
    clientName: "James",
    email: "james@example.com",
    assignedPlan: "Diet Plan",
    startDate: "12-02-2025",
    endDate: "12-02-2025",
    status: "Cancelled",
  },
  {
    key: "4",
    clientName: "Alice",
    email: "alice@example.com",
    assignedPlan: ["Diet Plan", "Workout Plan"],
    startDate: "12-02-2025",
    endDate: "12-02-2025",
    status: "Active",
  },
];

export default function ClientAssignedPlan() {
  return (
    <section className="w-full h-full rounded-lg bg-primary p-4 flex flex-col gap-4 justify-start items-center my-3">
      <p className="max-w-[1100px] w-full h-[45px] bg-secondary-bg font-bold text-[16px] text-primary text-center flex justify-center items-center">
        Assigned Plans
      </p>
      <div className="w-full h-full flex flex-col gap-4 justify-start items-center">
        <ClientAssignedPlansTable plans={dummyPlans} />
      </div>
    </section>
  );
}
