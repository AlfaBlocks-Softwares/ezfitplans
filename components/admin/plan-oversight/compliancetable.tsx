"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IClientCompliance } from "@/types";
import { deleteicon, edit, message } from "@/assets";
import Image from "next/image";

interface ClientComplianceTableProps {
  compliance: IClientCompliance[];
}

const AdminComplianceTable: React.FC<ClientComplianceTableProps> = ({
  compliance,
}) => {
  const columns: ColumnsType<IClientCompliance> = [
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
      title: "Plans",
      dataIndex: "plans",
      key: "plans",
      render: (plans: string[]) => (
        <div className="flex flex-col">
          {plans?.map((plan, index) => (
            <span key={index}>{plan}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Compliance",
      dataIndex: "compliance",
      key: "compliance",
      render: (compliance: string[]) => (
        <div className="flex flex-col">
          {compliance?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex flex-row gap-3 justify-center items-center">
          <Image
            src={edit}
            alt="edit"
            className="w-[24px] h-[24px] cursor-pointer"
          />

          <Image
            src={message}
            alt="message"
            className="w-[24px] h-[24px] cursor-pointer"
          />

          <Image
            src={deleteicon}
            alt="delete"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={compliance}
      rowKey="id"
      pagination={false}
      className="bg-primary w-full !max-w-[1027px] !border-0"
      scroll={{ x: "max-content" }}
    />
  );
};

export default AdminComplianceTable;
