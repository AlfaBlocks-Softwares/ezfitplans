import NutritionalBreakdownTable from "../dietplandetails-daily/nutritionalbreakdowntable";
import DietPlanWeeklyCalendar from "./calender";

export default function DietPlanWeeklyDetails() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-start gap-[12px]">
      <DietPlanWeeklyCalendar />
      <NutritionalBreakdownTable />
    </main>
  );
}
