import { Button } from "@/design-system";
import { IDietPlan } from "@/types";

interface Props {
  details: IDietPlan;
}

const DietPlanCard: React.FC<Props> = ({ details }) => {
  return (
    <section className="w-[440px] h-[465px] p-[12px] flex flex-col justify-start items-start gap-[12px]">
      <p className="px-[32px] font-bold text-[24px] font-noto-serif">
        {details?.day}
      </p>

      <hr className="w-full text-muted h-2" />

      <div className="p-[32px] flex flex-col justify-start items-start gap-[16px]">
        <div className="w-full flex justify-between items-center">
          <p className="font-bold text-[24px] font-noto-serif">
            {details?.daytime}
          </p>
          <Button variant={"outline"}>Edit</Button>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-[8px]">
          <p className="font-[400] text-[14px] font-noto-serif">
            {details?.title}
          </p>
          <p className="font-[400] text-[14px] font-noto-serif">
            Calories: {details?.calories}
          </p>
        </div>

        <div className="w-full flex justify-start gap-[8px]">
          <Button>Completed</Button>
          <Button variant={"outline"}>Skip</Button>
        </div>

        <textarea
          className="w-[350px] h-[80px] p-[16px] rounded-xl border-1 border-muted overflow-hidden resize-none"
          placeholder="Feedback"
        />

        <Button variant={"outline"}>Add Food</Button>
      </div>
    </section>
  );
};

export default DietPlanCard;
