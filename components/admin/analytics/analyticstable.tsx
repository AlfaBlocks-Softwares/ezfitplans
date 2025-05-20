"use client";
import React from "react";
import { Table, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "@/design-system";
import { IAdminAnalytics } from "@/types";

interface ComplianceTableProps {
  analytics: IAdminAnalytics[];
  onViewDetails?: (id: string) => void;
  onReview?: (id: string) => void;
}

const AdminAnalyticsReportTable: React.FC<ComplianceTableProps> = ({
  analytics,
  onViewDetails,
  onReview,
}) => {
  const columns: ColumnsType<IAdminAnalytics> = [
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
      title: "Compliance score",
      key: "complianceScore",
      render: (_, record) => (
        <span>
          {record.complianceScore.score}/{record.complianceScore.total}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="small">
          <Button
            variant={"text"}
            className="!text-[#008B8B] text-sm"
            onClick={() => onViewDetails?.(record.id)}
          >
            View Details
          </Button>
          <Button
            variant={"text"}
            className="!text-[#007AFF] text-sm"
            onClick={() => onReview?.(record.id)}
          >
            Review
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={analytics}
      rowKey="id"
      pagination={false}
      className="bg-primary w-full !max-w-[1027px] !border-0"
      scroll={{ x: "max-content" }}
    />
  );
};

export default AdminAnalyticsReportTable;
