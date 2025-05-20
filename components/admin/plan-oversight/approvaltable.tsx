"use client";
import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IApprovalRequest } from "@/types";
import { Button } from "@/design-system";

interface ApprovalRequestsTableProps {
  approvals: IApprovalRequest[];
}

const ApprovalRequestsTable: React.FC<ApprovalRequestsTableProps> = ({
  approvals,
}) => {
  const columns: ColumnsType<IApprovalRequest> = [
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
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (categories: string[]) => (
        <div className="flex flex-col">
          {categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="small">
          <Button variant={"text"} className="!text-secondary">
            Approve
          </Button>
          <Button variant={"text"} className="!text-destructive">
            Deny
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={approvals}
      rowKey="id"
      pagination={false}
      className="bg-primary w-full !max-w-[1027px] !border-0"
      scroll={{ x: "max-content" }}
    />
  );
};

export default ApprovalRequestsTable;
