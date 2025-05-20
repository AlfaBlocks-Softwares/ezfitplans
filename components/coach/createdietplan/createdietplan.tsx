import React from "react";
import Initials from "./initials";
import DailyTarget from "./dailytarget";
import CustomizedCalendar from "./assignedplans";
import ProgressTracking from "./progress";
import WorkoutDietCalendar from "./calender";

const CreateDietPlanForm = () => {
  return (
    <form className="w-full">
      <Initials />
      <DailyTarget />
      {/* <CustomizedCalendar /> */}
      <WorkoutDietCalendar />
      <ProgressTracking />
    </form>
  );
};

export default CreateDietPlanForm;
