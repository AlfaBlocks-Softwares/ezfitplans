"use client";
import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IClientForCoach } from "@/types";
import { edit, message, deleteicon } from "@/assets";
import Image from "next/image";

interface Props {
  clients: IClientForCoach[];
}

const CoachClientManagementTable: React.FC<Props> = ({ clients }) => {
  const columns: ColumnsType<IClientForCoach> = [
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
      dataIndex: "assignedPlan",
      key: "assignedPlan",
      render: (plans) => {
        if (Array.isArray(plans)) {
          return (
            <div className="flex flex-col gap-1">
              {plans.map((plan, index) => (
                <span
                  key={index}
                  className={`${
                    plan.includes("Diet") ? "text-[#F16821]" : "text-secondary"
                  }`}
                >
                  {plan}
                </span>
              ))}
            </div>
          );
        } else {
          return (
            <span
              className={`${
                plans.includes("Diet") ? "text-[#F16821]" : "text-secondary"
              }`}
            >
              {plans}
            </span>
          );
        }
      },
    },
    {
      title: "Adherence",
      dataIndex: "adherence",
      key: "adherence",
    },
    {
      title: "Last Activity Date",
      dataIndex: "lastActivityDate",
      key: "lastActivityDate",
    },
    {
      title: "Last Activity Check-in",
      dataIndex: "lastActivityCheckIn",
      key: "lastActivityCheckIn",
    },
    {
      title: "Pending Check-in",
      dataIndex: "pendingCheckIn",
      key: "pendingCheckIn",
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
    <div className="w-full flex justify-center items-center">
      <Table
        columns={columns}
        dataSource={clients}
        rowKey="id"
        pagination={false}
        className="w-full !max-w-[1600px]"
        scroll={{ x: true }}
      />
    </div>
  );
};

export default CoachClientManagementTable;
