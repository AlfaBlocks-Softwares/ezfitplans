import { IAdminDashboardAnalytics } from "@/types";

const AdminDashboardStatCard: React.FC<IAdminDashboardAnalytics> = ({
  title,
  value,
  change,
}) => {
  return (
    <div className="bg-primary p-3 rounded-[12px] w-full h-[150px] flex flex-col justify-between items-start gap-1">
      <p className="text-black font-poppins text-sm font-[400]">{title}</p>
      <div className="flex flex-col justify-start items-start gap-1">
        <p className="font-noto-serif text-3xl font-bold text-black">{value}</p>
        <p className="text-black font-poppins text-sm font-[400]">
          <span
            className={`${
              change?.isPositive ? "!text-secondary" : "!text-destructive"
            }`}
          >
            {change?.isPositive ? "+" : "-"} {change?.value}%
          </span>{" "}
          vs last month
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardStatCard;
