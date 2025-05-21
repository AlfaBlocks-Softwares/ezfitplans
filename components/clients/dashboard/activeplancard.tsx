// components/clients/dashboard/ActivePlanCard.tsx
import { Button } from "@/design-system";
import React from "react";

interface ActivePlanCardProps {
  title: string;
  planName: string;
  startDate: string;
  endDate: string;
  onViewPlan?: () => void;
  onUpdateProgress?: () => void;
  onMessageCoach?: () => void;
}

const ActivePlanCard: React.FC<ActivePlanCardProps> = ({
  title,
  planName,
  startDate,
  endDate,
  onViewPlan,
  onUpdateProgress,
  onMessageCoach,
}) => (
  <div className="bg-primary rounded-2xl p-6 w-full">
    <div className="font-noto-serif font-bold text-2xl text-black mb-2">
      {title}
    </div>
    <div className="text-black text-[16px] font-poppins mb-2">{planName}</div>
    <div className="text-black text-[16px] font-poppins mb-1">
      Start Date: {startDate}
    </div>
    <div className="text-black text-[16px] font-poppins mb-4">
      End Date: {endDate}
    </div>
    <div className="flex flex-row gap-3">
      <Button onClick={onViewPlan}>View Plan</Button>
      <Button variant="outline" onClick={onUpdateProgress}>
        Update Progress
      </Button>
      <Button variant="outline" onClick={onMessageCoach}>
        Message Coach
      </Button>
    </div>
  </div>
);

export default ActivePlanCard;
