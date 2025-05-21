import React from "react";
import { Modal, Table } from "antd";
import { FoodItem } from "@/types";

interface Props {
  open: boolean;
  onClose: () => void;
  onAddFood: (foods: FoodItem[]) => void;
}

// Dummy food data
const foodOptions: FoodItem[] = [
  {
    id: "1",
    name: "Chicken",
    amount: "100g",
    calories: 165,
    protein: 31,
    fats: 3.6,
    carbs: 0,
  },
  {
    id: "2",
    name: "Eggs",
    amount: "2 large",
    calories: 155,
    protein: 13,
    fats: 11,
    carbs: 1.1,
  },
  {
    id: "3",
    name: "Bread",
    amount: "2 slices",
    calories: 133,
    protein: 4.6,
    fats: 1.7,
    carbs: 25,
  },
  {
    id: "4",
    name: "Corn Flakes",
    amount: "30g",
    calories: 113,
    protein: 2.1,
    fats: 0.2,
    carbs: 24,
  },
  {
    id: "5",
    name: "Berries",
    amount: "1 bowl",
    calories: 70,
    protein: 1,
    fats: 0.3,
    carbs: 17,
  },
];

export default function AddFoodModal({ open, onClose, onAddFood }: Props) {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      centered
      onOk={() => {
        onAddFood(foodOptions.filter((f) => selectedRowKeys.includes(f.id)));
      }}
      title="Select Food"
      className="!w-[700px] !h-max !p-3"
      okText="Add Food"
      cancelText="Cancel"
      okButtonProps={{
        className: "!bg-secondary-bg !text-white !font-bold",
      }}
      cancelButtonProps={{
        className:
          "!bg-white !text-secondary !font-bold !border-1 !border-secondary-bg",
      }}
    >
      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        dataSource={foodOptions}
        columns={[
          { title: "Food", dataIndex: "name" },
          { title: "Amount", dataIndex: "amount" },
          { title: "Calories", dataIndex: "calories" },
          { title: "Protein", dataIndex: "protein" },
          { title: "Fats", dataIndex: "fats" },
          { title: "Carbs", dataIndex: "carbs" },
        ]}
        rowKey="id"
        pagination={false}
      />
    </Modal>
  );
}
