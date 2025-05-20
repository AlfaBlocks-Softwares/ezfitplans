import { Button } from "@/design-system";

interface CoachDetailsCardProps {
  title: string;
  subtitle: string;
  specialties: string[];
  rating: number;
  pricePerSession: number;
  onViewProfile?: () => void;
}

const CoachDetailsCard = ({
  title,
  subtitle,
  specialties,
  rating,
  pricePerSession,
  onViewProfile,
}: CoachDetailsCardProps) => {
  return (
    <div className="w-full h-[300px]  border-r-1 border-r-muted rounded-[12px] p-8 flex flex-col justify-between items-start gap-4">
      <div className="w-max flex flex-row justify-start items-start gap-4">
        <div className="w-20 h-20 rounded-[50%] bg-muted"></div>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="font-noto-serif text-black font-bold text-2xl">
            {title}
          </p>
          <p className="font-poppins text-muted font-[400] text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-black font-[400] font-poppins text-sm">
          Specializes in: {specialties.join(", ")}
        </p>
        <p className="text-black font-[400] font-poppins text-sm">
          Rating: (⭐ {rating}/5)
        </p>
        <p className="text-black font-[400] font-poppins text-sm">
          Pricing: (${pricePerSession} - per session)
        </p>
      </div>

      <Button onClick={onViewProfile}>View Profile</Button>
    </div>
  );
};

export default CoachDetailsCard;
