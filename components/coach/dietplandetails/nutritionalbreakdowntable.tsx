import { INutritionalItem } from "@/types";

const cols = [
  { name: "Food" },
  { name: "Amount" },
  { name: "Calories (kcl)" },
  { name: "Protein (g)" },
  { name: "Fats (g)" },
  { name: "Carbohydrates (g)" },
];

export const nutritionalData: INutritionalItem[] = [
  {
    food: "Egg",
    amount: "2",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Bread",
    amount: "2 slice",
    calories: 72,
    protein: 10,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Corn Flakes",
    amount: "15 gm",
    calories: 72,
    protein: 90,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Berries",
    amount: "1 bowl",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Egg",
    amount: "2",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Bread",
    amount: "2 slice",
    calories: 72,
    protein: 10,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Corn Flakes",
    amount: "15 gm",
    calories: 72,
    protein: 90,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Berries",
    amount: "1 bowl",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Egg",
    amount: "2",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Bread",
    amount: "2 slice",
    calories: 72,
    protein: 10,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Corn Flakes",
    amount: "15 gm",
    calories: 72,
    protein: 90,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Berries",
    amount: "1 bowl",
    calories: 72,
    protein: 70,
    fats: 72,
    carbohydrates: 72,
  },
];

const NutritionalBreakdownTable = () => {
  return (
    <section className="w-full p-[12px] my-[12px] bg-primary border-1 border-muted rounded-xl flex justify-center items-center">
      <table className="max-w-[1024px] w-full flex flex-col justify-center items-center gap-[4px]">
        <thead className="w-full h-[75px] bg-secondary-bg font-bold text-[16px] text-primary text-center flex justify-center items-center">
          Nutritional Breakdown
        </thead>
        <tr className="bg-secondary-bg h-[45px] flex justify-start items-start">
          {cols?.map((itm) => (
            <th
              key={itm?.name}
              className="w-[171px] h-full text-primary font-bold text-[16px] text-center flex justify-center items-center"
            >
              {itm?.name}
            </th>
          ))}
        </tr>
        <tbody className="flex flex-col">
          {nutritionalData?.map((itm) => (
            <tr className="flex">
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center border-r-1 border-muted">
                {itm?.food}
              </td>
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center border-r-1 border-muted">
                {itm?.amount}
              </td>
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center border-r-1 border-muted">
                {itm?.calories}
              </td>
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center border-r-1 border-muted">
                {itm?.protein}
              </td>
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center border-r-1 border-muted">
                {itm?.fats}
              </td>
              <td className="w-[171px] h-[60px]  font-[400] text-[16px] text-center flex justify-center items-center">
                {itm?.carbohydrates}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NutritionalBreakdownTable;
