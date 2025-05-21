import React from "react";
import { Table, Card } from "antd";
import AddFoodModal from "./addfood";
import { FoodItem, Meal, MealType } from "@/types";
import { Button } from "@/design-system";

interface Props {
  meal: Meal;
  isOpen: boolean;
  onOpen: () => void;
  dayIdx: number;
  modalState: { open: boolean; dayIdx: number; mealType: MealType | null };
  setModalState: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      dayIdx: number;
      mealType: MealType | null;
    }>
  >;
  handleAddFood: (foods: FoodItem[]) => void;
}

export default function MealSection({
  meal,
  isOpen,
  onOpen,
  dayIdx,
  modalState,
  setModalState,
  handleAddFood,
}: Props) {
  return (
    <Card
      style={{
        borderRadius: 12,
        width: isOpen ? "800px" : "max-content",
        backgroundColor: isOpen ? "transparent" : "var(--secondary-bg)",
        height: "450px",
        border: isOpen ? "1px solid var(--muted)" : "none",
      }}
      className={`flex ${
        isOpen ? "justify-start items-start" : "justify-center items-center "
      }h-full !cursor-pointer`}
      onClick={onOpen}
    >
      <p className={`${isOpen ? "hidden" : "display text-primary font-bold"}`}>
        {meal.type.toUpperCase()}
      </p>

      {isOpen && (
        <div className="flex flex-col h-[100%] w-full gap-3">
          <div className="w-full flex flex-row justify-center items-center bg-secondary-bg p-2 h-[70px]">
            <p className="text-primary font-poppins text-sm font-bold">
              {meal.type.toUpperCase()}
            </p>
          </div>
          <Table
            dataSource={meal.foods}
            columns={[
              { title: "Food", dataIndex: "name" },
              { title: "Amount", dataIndex: "amount" },
              { title: "Calories (kcl)", dataIndex: "calories" },
              { title: "Protein (gm)", dataIndex: "protein" },
              { title: "Fats (gm)", dataIndex: "fats" },
              { title: "Carbs (gm)", dataIndex: "carbs" },
            ]}
            pagination={false}
            rowKey="id"
            className="!w-[700px] !max-h-[90%] h-full overflow-y-auto"
          />
          <button
            className="ml-6 cursor-pointer"
            type="button"
            onClick={() =>
              setModalState({ open: true, dayIdx, mealType: meal.type })
            }
          >
            <div className="flex gap-2">
              <p className="text-black font-[400] font-poppins">Add Food</p>
              <span className="rounded-[50%] border-1 border-black w-6 h-6 text-black flex justify-center items-center font-[400] text-xl">
                +
              </span>
            </div>
          </button>
          <AddFoodModal
            open={modalState.open}
            onClose={() =>
              setModalState({ open: false, dayIdx: 0, mealType: null })
            }
            onAddFood={handleAddFood}
          />
        </div>
      )}
    </Card>
  );
}
