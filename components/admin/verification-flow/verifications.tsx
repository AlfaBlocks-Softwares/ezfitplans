import { mockCoaches } from "@/constants";
import CoachVerificationTable from "./coachverificationtable";

const AdminCoachesVerification = () => {
  return (
    <main className="h-full min-h-[88dvh] w-full flex flex-col gap-3">
      <section className="w-full h-full bg-primary rounded-xl p-3 flex justify-center items-start">
        <CoachVerificationTable coaches={mockCoaches} />
      </section>
    </main>
  );
};

export default AdminCoachesVerification;
