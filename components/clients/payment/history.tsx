import Table, { ColumnsType } from "antd/es/table";

interface IPayment {
  month: string;
  pastTransactions: string;
  receipt: string;
  planPurchases: string;
  monthlySubscriptionCharges: string;
}

const columns: ColumnsType<IPayment> = [
  {
    title: "Month",
    dataIndex: "month",
    key: "month",
    className: "font-medium",
  },
  {
    title: "Past Transactions",
    dataIndex: "pastTransactions",
    key: "pastTransactions",
  },
  {
    title: "Receipt",
    dataIndex: "receipt",
    key: "receipt",
  },
  {
    title: "Plan Purchases",
    dataIndex: "planPurchases",
    key: "planPurchases",
  },
  {
    title: "Monthly Subscription Charges",
    dataIndex: "monthlySubscriptionCharges",
    key: "monthlySubscriptionCharges",
  },
];

export const data: IPayment[] = [
  {
    month: "January",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
  {
    month: "February",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
  {
    month: "March",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
  {
    month: "April",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
  {
    month: "May",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
  {
    month: "June",
    pastTransactions: "100",
    receipt: "100",
    planPurchases: "100",
    monthlySubscriptionCharges: "100",
  },
];

export default function PaymentHistory() {
  return (
    <main className="w-full bg-primary rounded-[12px] px-3 py-8  min-h-[88dvh] flex flex-col justify-start items-center mt-3">
      <h1 className="font-noto-serif text-4xl text-black font-bold mb-3 text-start self-start">
        Transaction History
      </h1>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={false}
        className="bg-primary w-full !max-w-[1027px] !border-0 !mt-3"
        scroll={{ x: "max-content" }}
      />
    </main>
  );
}
