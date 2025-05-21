import React from "react";
import Initials from "./initials";
import DailyTarget from "./dailytarget";
import CustomizedCalendar from "./assignedplans";
import ProgressTracking from "./progress";
import WorkoutDietCalendar from "./calender";
import DietPlanBuilder from "./dietplanbuilder";

const CreateDietPlanForm = () => {
  return (
    <form className="w-full">
      <Initials />
      <DailyTarget />
      <DietPlanBuilder />
      <WorkoutDietCalendar />
      <ProgressTracking />
    </form>
  );
};

export default CreateDietPlanForm;
