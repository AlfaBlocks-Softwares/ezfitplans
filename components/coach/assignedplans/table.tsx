"use client";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { edit, message } from "@/assets";
import { IAssignedPlan } from "@/types/coach";

interface AssignedPlansTableProps {
  plans: IAssignedPlan[];
}

const EnhancedAssignedPlansTable: React.FC<AssignedPlansTableProps> = ({
  plans,
}) => {
  // Define table columns
  const columns: ColumnsType<IAssignedPlan> = [
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Assigned Plan",
      dataIndex: "assignedPlan",
      key: "assignedPlan",
      width: 150,
      render: (plan) => {
        if (Array.isArray(plan)) {
          return (
            <div>
              {plan.map((p, index) => (
                <div
                  key={index}
                  style={{
                    color: p.includes("Diet") ? "#f59e0b" : "#0d9488",
                    marginBottom: index < plan.length - 1 ? "4px" : 0,
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          );
        }
        return (
          <span
            style={{ color: plan.includes("Diet") ? "#f59e0b" : "#0d9488" }}
          >
            {plan}
          </span>
        );
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: 120,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: 120,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <div className="w-full flex justify-between gap-2">
          <Image
            src={message}
            alt="message"
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <Image
            src={edit}
            alt="edit"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={plans}
      pagination={false}
      className="w-full !max-w-[1100px]"
    />
  );
};

export default EnhancedAssignedPlansTable;
