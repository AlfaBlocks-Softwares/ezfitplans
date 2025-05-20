"use client";
import { search } from "@/assets";
import { Input } from "@/design-system";
import { INutritionalItem } from "@/types";
import Table, { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { useState } from "react";

const FoodAndRecipesList: INutritionalItem[] = [
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
    food: "Rice",
    amount: "100 gm",
    calories: 72,
    protein: 90,
    fats: 72,
    carbohydrates: 72,
  },
  {
    food: "Chicken",
    amount: "100 gm",
    calories: 72,
    protein: 90,
    fats: 72,
    carbohydrates: 72,
  },
];

const columns: ColumnsType<INutritionalItem> = [
  {
    title: "Food",
    dataIndex: "food",
    key: "food",
  },
  {
    title: "Calories (kcl)",
    dataIndex: "calories",
    key: "calories",
  },
  {
    title: "Protein (g)",
    dataIndex: "protein",
    key: "protein",
  },
  {
    title: "Fats (g)",
    dataIndex: "fats",
    key: "fats",
  },
  {
    title: "Carbohydrates (g)",
    dataIndex: "carbohydrates",
    key: "carbohydrates",
  },
];

const FoodAndRecipeListTable = () => {
  const [FoodAndRecipesDB, setFoodAndRecipesDB] = useState(FoodAndRecipesList);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;

  //   if (!value) setFoodAndRecipesDB(FoodAndRecipesList);

  //   const filteredFoodList = FoodAndRecipesDB?.filter((itm) =>
  //     itm?.food?.includes(value)
  //   );

  //   setFoodAndRecipesDB(filteredFoodList);
  // };

  return (
    <main className="w-full bg-primary rounded-[12px] px-3 py-8  h-[88dvh] flex flex-col justify-start items-center mt-3 gap-8">
      <div className="w-full relative  max-w-[670px] mt-20">
        <Image
          src={search}
          alt="search"
          className="w-[18px] h-[18px] absolute left-4 top-3"
        />
        <Input
          className="pl-10 border-1 border-muted w-full"
          placeholder="Search"
        />
      </div>

      <Table
        columns={columns}
        dataSource={FoodAndRecipesList}
        pagination={false}
        className="w-full !max-w-[800px]"
      />
    </main>
  );
};

export default FoodAndRecipeListTable;
