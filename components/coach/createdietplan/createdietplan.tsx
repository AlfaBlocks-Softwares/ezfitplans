import React from "react";
import Initials from "./initials";
import DailyTarget from "./dailytarget";
import CustomizedCalendar from "./assignedplans";
import ProgressTracking from "./progress";

const CreateDietPlanForm = () => {
  return (
    <form className="w-full">
      <Initials />
      <DailyTarget />
      {/* <CustomizedCalendar /> */}
      <ProgressTracking />
    </form>
  );
};

export default CreateDietPlanForm;
