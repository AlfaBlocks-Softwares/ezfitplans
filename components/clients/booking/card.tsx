import { calendaricon } from "@/assets";
import { Button } from "@/design-system";
import { DatePicker } from "antd";
import Image from "next/image";

export interface SessionCardProps {
  coachName: string;
  sessionType: "Video" | "Audio";
  price: string;
  buttonLabel: string;
}

export default function BookingCard({
  coachName,
  sessionType,
  price,
  buttonLabel,
}: SessionCardProps) {
  return (
    <div className="border border-muted rounded-lg p-8 flex flex-col gap-8 w-full">
      <div className="flex items-center gap-4 text-xl font-bold">
        <Image
          src={calendaricon}
          alt="calendar"
          className="w-[32px] h-[32px]"
        />
        <DatePicker
          className="w-full placeholder:!text-black placeholder:!font-bold t!ext-2xl !border-none"
          format="DD-MM-YYYY"
          placeholder="Pick a date"
          suffixIcon={null}
        />
      </div>
      <div className="flex flex-col gap-2 text-sm font-poppins text-black">
        <div className="flex items-center gap-2">🏋️ Coach: {coachName}</div>
        <div className="flex items-center gap-2">
          🎥 Session Type: {sessionType}
        </div>
        <div className="flex items-center gap-2">💰 Price: {price}</div>
      </div>
      <Button>Confirm & Pay</Button>
    </div>
  );
}
