"use client";
import { Table, Typography } from "antd";
import { INutritionalItem } from "@/types";

const { Title } = Typography;

const columns = [
  { title: "Food", dataIndex: "food", key: "food" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Calories (kcl)", dataIndex: "calories", key: "calories" },
  { title: "Protein (g)", dataIndex: "protein", key: "protein" },
  { title: "Fats (g)", dataIndex: "fats", key: "fats" },
  {
    title: "Carbohydrates (g)",
    dataIndex: "carbohydrates",
    key: "carbohydrates",
  },
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
    <section className="w-full p-4 my-4 bg-primary border border-muted rounded-xl flex flex-col items-center">
      <Title
        level={4}
        className="!mb-4 !text-center w-full !max-w-[1024px] h-[75px] !font-bold !text-primary !bg-secondary-bg flex justify-center items-center !font-poppins"
      >
        Nutritional Breakdown
      </Title>
      <Table
        columns={columns}
        dataSource={nutritionalData}
        rowKey={(record) =>
          `${record.food}-${record.amount}-${record.calories}`
        }
        pagination={false}
        className="w-full !max-w-[1024px]"
      />
    </section>
  );
};

export default NutritionalBreakdownTable;
