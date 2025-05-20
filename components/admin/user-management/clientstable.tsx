"use client";
import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IClient } from "@/types";
import { Button } from "@/design-system";

interface ClientsTableProps {
  clients: IClient[];
}

const AdminClientsTable: React.FC<ClientsTableProps> = ({ clients }) => {
  const columns: ColumnsType<IClient> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: "font-medium",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Assigned Plan",
      dataIndex: "assignedPlans",
      key: "assignedPlans",
      render: (plans: string[]) => (
        <div className="flex flex-col">
          {plans.map((plan, index) => (
            <span key={index}>{plan}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Last Activity Check-in",
      dataIndex: "lastActivity",
      key: "lastActivity",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex flex-row gap-2 justify-center items-center">
          <Button variant={"text"} className="!text-[#9747FF]">
            View
          </Button>
          <Button variant={"text"} className="!text-secondary">
            Edit
          </Button>
          <Button variant={"text"} className="!text-[#007AFF]">
            Ban
          </Button>
          <Button variant={"text"} className="!text-destructive">
            Suspend
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={clients}
      rowKey="id"
      pagination={false}
      className="bg-primary w-full !max-w-[1027px] !border-0"
      scroll={{ x: "max-content" }}
    />
  );
};

export default AdminClientsTable;
