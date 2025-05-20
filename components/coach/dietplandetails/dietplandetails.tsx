import { IDietPlan } from "@/types";
import DietPlanCard from "./dietplancard";
import NutritionalBreakdownTable from "./nutritionalbreakdowntable";

export const dietPlanData: IDietPlan[] = [
  {
    day: "Monday",
    daytime: "Break Fast",
    title: "Oatmeal with Fruits",
    calories: 250,
    feedback: "",
  },
  {
    day: "Tuesday",
    daytime: "Lunch",
    title: "Oatmeal with Fruits",
    calories: 250,
    feedback: "",
  },
  {
    day: "Wednesday",
    daytime: "Dinner",
    title: "Oatmeal with Fruits",
    calories: 250,
    feedback: "",
  },
];

const DietPlanDetails = () => {
  return (
    <main className="w-full my-[12px]">
      <section className="bg-primary rounded-xl border-1 border-muted p-[12px]  flex flex-col  justify-start items-start gap-[8px]">
        <p className="text-black">Diet Plan</p>
        <div className="w-full flex justify-center items-center gap-[8px] flex-wrap">
          {dietPlanData?.map((itm, index) => (
            <DietPlanCard details={itm} key={index} />
          ))}
        </div>
      </section>
      <NutritionalBreakdownTable />
    </main>
  );
};

export default DietPlanDetails;
