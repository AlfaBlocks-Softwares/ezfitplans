import { Button } from "@/design-system";

interface ChallengeCardProps {
  title: string;
  startDate: string;
  endDate: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  startDate,
  endDate,
}) => {
  return (
    <div className="border-1 border-muted rounded-lg p-3 w-full flex flex-col justify-between">
      <p className="font-noto-serif text-lg font-bold pb-2 border-b-1 border-b-muted">
        {title}
      </p>

      <div className="mt-10 p-8 w-full flex flex-col justify-start items-start gap-4">
        <p className="text-xs text-black font-[400] font-poppins">
          Are you ready to level up?
        </p>

        <p className="text-xs text-black font-[400] font-poppins">
          Start date: {startDate}
        </p>
        <p className="text-xs text-black font-[400] font-poppins">
          End date: {endDate}
        </p>

        <div className="w-full flex justify-end gap-3">
          <Button>Join Now</Button>
          <Button variant={"outline"}>Track Progress</Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
