"use client";
import React, { useState } from "react";
import { Collapse } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { DayPlan, FoodItem, MealType } from "@/types";
import MealSection from "./mealsection";
import { dietPlanSchema } from "@/validations";
import { Button } from "@/design-system";
import Image from "next/image";
import { arrowuprightwhite } from "@/assets";

const defaultMeals = (): Record<MealType, any> => ({
  breakfast: { type: "breakfast", foods: [] },
  lunch: { type: "lunch", foods: [] },
  snack: { type: "snack", foods: [] },
  dinner: { type: "dinner", foods: [] },
});

export default function DietPlanBuilder() {
  const [days, setDays] = useState<DayPlan[]>([
    { id: uuidv4(), meals: defaultMeals() },
  ]);
  const [openDay, setOpenDay] = useState<string>(days[0].id);
  const [openMeal, setOpenMeal] = useState<MealType>("breakfast");
  const [modalState, setModalState] = useState<{
    open: boolean;
    dayIdx: number;
    mealType: MealType | null;
  }>({ open: false, dayIdx: 0, mealType: null });

  // React Hook Form setup
  const methods = useForm({
    resolver: zodResolver(dietPlanSchema),
    defaultValues: days,
  });

  const addDay = () => {
    setDays((prev) => [...prev, { id: uuidv4(), meals: defaultMeals() }]);
  };

  const handleAddFood = (foods: FoodItem[]) => {
    setDays((prevDays) =>
      prevDays.map((day, idx) => {
        if (idx !== modalState.dayIdx) return day;
        return {
          ...day,
          meals: {
            ...day.meals,
            [modalState.mealType!]: {
              ...day.meals[modalState.mealType!],
              foods: [...day.meals[modalState.mealType!].foods, ...foods],
            },
          },
        };
      })
    );
    setModalState({ open: false, dayIdx: 0, mealType: null });
  };

  const openAddFoodModal = (dayIdx: number, mealType: MealType) => {
    setModalState({ open: true, dayIdx, mealType });
  };

  return (
    <main className="w-full rounded-xl border-1 border-muted my-[12px] bg-primary p-[12px] flex flex-col justify-center items-center gap-[12px]">
      <FormProvider {...methods}>
        <div className="w-full flex flex-col justify-center items-center max-w-[1100px] gap-[14px]">
          {days.map((day, dayIdx) => (
            <Collapse
              key={day.id}
              activeKey={openDay === day.id ? [day.id] : []}
              onChange={() => setOpenDay(day.id)}
              className="w-full mb-4"
            >
              <Collapse.Panel header={`Day Plan ${dayIdx + 1}`} key={day.id}>
                <div className="w-full flex">
                  <div className="flex flex-row w-full gap-2">
                    {(
                      ["breakfast", "lunch", "snack", "dinner"] as MealType[]
                    ).map((meal) => (
                      <MealSection
                        key={meal}
                        meal={day.meals[meal]}
                        isOpen={openMeal === meal}
                        onOpen={() => setOpenMeal(meal)}
                        dayIdx={dayIdx}
                        modalState={modalState}
                        setModalState={setModalState}
                        handleAddFood={handleAddFood}
                      />
                    ))}
                  </div>
                </div>
              </Collapse.Panel>
            </Collapse>
          ))}
          <Button onClick={addDay} type="button">
            <div className="w-full flex justify-center items-center gap-[8px]">
              <p className="font-bold font-poppoins text-[14px]">
                Add Day Plan
              </p>
              <Image
                src={arrowuprightwhite}
                alt="arrow"
                className="w-[24px] h-[24px]"
              />
            </div>
          </Button>
        </div>
      </FormProvider>
    </main>
  );
}
