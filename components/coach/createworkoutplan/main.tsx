import DietPlanBuilder from "../createdietplan/dietplanbuilder";
import WorkoutPlanForm from "./form";
import WorkoutAssignedPlans from "./workoutassignedplanst";

export default function CreateWorkoutPlanMain() {
  return (
    <div className="w-full h-full flex flex-col gap-4 my-3">
      <WorkoutPlanForm />
      <DietPlanBuilder />
      <WorkoutAssignedPlans />
    </div>
  );
}
