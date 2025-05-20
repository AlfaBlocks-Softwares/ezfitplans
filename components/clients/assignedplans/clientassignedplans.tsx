"use client";
import { IClientAssignedPlan } from "@/types";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";

export const ClientsAssignedPlansData: IClientAssignedPlan[] = [
  {
    assignedPlan: "Diet Plan",
    duration: "1 week",
    progress: 70,
    coach: "James",
  },
  {
    assignedPlan: "Workout Plan",
    duration: "3 days",
    progress: 60,
    coach: "James",
  },
  {
    assignedPlan: "Diet Plan",
    duration: "1 month",
    progress: 20,
    coach: "James",
  },
];

const ClientsAssignedPlans = () => {
  const [ClientAssignedPlans, setClientAssignedPlans] = useState(
    ClientsAssignedPlansData
  );

  const columns: ColumnsType<IClientAssignedPlan> = [
    {
      title: "Assigned Plan",
      dataIndex: "assignedPlan",
      key: "assignedPlan",
      className: "font-medium",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Progress (%)",
      dataIndex: "progress",
      key: "progress",
    },
    {
      title: "Coach",
      dataIndex: "coach",
      key: "coach",
    },
  ];

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;

  //   if (!value) setFoodAndRecipesDB(FoodAndRecipesList);

  //   const filteredFoodList = FoodAndRecipesDB?.filter((itm) =>
  //     itm?.food?.includes(value)
  //   );

  //   setFoodAndRecipesDB(filteredFoodList);
  // };

  return (
    <main className="w-full bg-primary rounded-[12px] px-3 py-8  h-[88dvh] flex flex-col justify-start items-center mt-3">
      <p className="max-w-[682px] w-full h-[45px] bg-secondary-bg font-bold text-[16px] text-primary text-center flex justify-center items-center">
        Assigned Plans
      </p>
      <div className="max-w-[682px] w-full flex flex-col justify-center items-center gap-[4px] mt-3">
        <Table
          columns={columns}
          dataSource={ClientsAssignedPlansData}
          rowKey="id"
          pagination={false}
          className="bg-primary w-full !max-w-[1027px] !border-0"
          scroll={{ x: "max-content" }}
        />
      </div>
    </main>
  );
};

export default ClientsAssignedPlans;
