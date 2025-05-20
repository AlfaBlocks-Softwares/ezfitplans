"use client";
import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "@/design-system";
import { ICoachVerification } from "@/types";

interface CertificationTableProps {
  coaches: ICoachVerification[];
  onRequestReverification?: (id: string) => void;
  onApprove?: (id: string) => void;
  onReview?: (id: string) => void;
}

const CoachVerificationTable: React.FC<CertificationTableProps> = ({
  coaches,
  onRequestReverification,
  onApprove,
  onReview,
}) => {
  const columns: ColumnsType<ICoachVerification> = [
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
      title: "Password",
      dataIndex: "password",
      key: "password",
      className: "font-mono",
    },
    {
      title: "Certification",
      key: "certification",
      render: (_, record) => (
        <Space size="small">
          <Button
            variant={"text"}
            className="!text-secondary text-sm"
            onClick={() => onApprove?.(record.id)}
          >
            Approve
          </Button>
          <Button
            variant={"text"}
            className="!text-[#007AFF] text-sm"
            onClick={() => onReview?.(record.id)}
          >
            Review
          </Button>
          <span className="text-destructive text-sm">Denied</span>
        </Space>
      ),
    },
    {
      title: "Re-verification",
      key: "reverification",
      render: (_, record) => (
        <Button
          variant={"text"}
          className="!text-[#008B8B] text-sm"
          onClick={() => onRequestReverification?.(record.id)}
        >
          Request
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={coaches}
      rowKey="id"
      pagination={false}
      className="bg-primary w-full !max-w-[1027px] !border-0"
      scroll={{ x: "max-content" }}
    />
  );
};

export default CoachVerificationTable;
