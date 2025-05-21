import { Button } from "@/design-system";
import { IWorkOutPlan } from "@/types";

interface Props {
  details: IWorkOutPlan;
}

const WorkOutPlanCard: React.FC<Props> = ({ details }) => {
  const exercise = details.exercise[0]; // Show first exercise for now
  return (
    <section className="w-full h-[410px] p-[12px] flex flex-col justify-start items-start gap-[12px] border border-muted rounded-xl">
      <p className="px-[16px] font-bold text-[22px] font-noto-serif">
        {details?.day}
      </p>

      <hr className="w-full text-muted h-2" />

      <div className="px-[16px] flex flex-col justify-start items-start gap-[16px] w-full">
        <p className="font-bold text-[20px] font-noto-serif mb-2">
          {exercise?.name}
        </p>
        {/* Progress bar placeholder */}
        <div className="w-full h-1 rounded-full mb-2 bg-muted">
          <div
            className="h-1 bg-secondary-bg rounded-full"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w-full flex flex-col gap-4 mb-2">
          <div className="text-[15px] font-noto-serif">
            Sets: {exercise?.sets}
          </div>
          <div className="text-[15px] font-noto-serif">
            Reps: {exercise?.reps}
          </div>
        </div>
        <textarea
          className="w-full h-[60px] p-[10px] rounded-xl border-1 border-muted overflow-hidden resize-none mb-2"
          placeholder="Note"
          defaultValue={details.notes}
        />
        <div className="w-full flex flex-row gap-2 mt-2 justify-start items-center">
          <Button className="flex-1">Log Set</Button>
          <Button className="flex-1" variant="outline">
            Add Exercise
          </Button>
          <Button variant="text" className="text-secondary flex-1 ml-10">
            Edit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkOutPlanCard;
