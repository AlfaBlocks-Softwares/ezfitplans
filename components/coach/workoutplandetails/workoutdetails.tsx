import React from "react";
import WorkOutPlanCard from "./workoutplancard";
import { IWorkOutPlan } from "@/types";

const dummyWorkoutPlans: IWorkOutPlan[] = [
  {
    day: "Monday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
  {
    day: "Tuesday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
  {
    day: "Wednesday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
  {
    day: "Thursday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
  {
    day: "Friday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
  {
    day: "Saturday",
    exercise: [{ name: "Push Ups", sets: "3", reps: "5-10" }],
    notes: "",
  },
];

const WorkoutDetails = () => {
  return (
    <main className="w-full my-[12px]">
      <section className="bg-primary rounded-xl border-1 border-muted p-[12px] flex flex-col justify-start items-start gap-[8px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {dummyWorkoutPlans.map((plan, idx) => (
            <WorkOutPlanCard key={idx} details={plan} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;
