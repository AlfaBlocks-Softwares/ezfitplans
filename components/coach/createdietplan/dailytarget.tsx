import { Input } from "@/design-system";

const DailyTarget = () => {
  return (
    <section className="rounded-xl border-1 border-muted my-[12px] w-full bg-primary p-[12px] flex justify-between items-center  ">
      <p className="text-2xl font-bold font-noto-serif text-black">
        Daily Targets
      </p>
      <div className="flex justify-end items-center gap-[20px]">
        <div className="flex flex-col justify-start items-start">
          <p className="font-[400] font-poppins text-[10px] text-black">
            Calories
          </p>
          <Input
            variant={"dashboard"}
            className="max-w-[100px] text-center"
            placeholder="|"
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <p className="font-[400] font-poppins text-[10px] text-black">
            Proteins
          </p>
          <Input
            variant={"dashboard"}
            className="max-w-[100px] text-center"
            placeholder="|"
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <p className="font-[400] font-poppins text-[10px] text-black">
            Carbs
          </p>
          <Input
            variant={"dashboard"}
            className="max-w-[100px] text-center"
            placeholder="|"
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <p className="font-[400] font-poppins text-[10px] text-black">Fats</p>
          <Input
            variant={"dashboard"}
            className="max-w-[100px] text-center"
            placeholder="|"
          />
        </div>
      </div>
    </section>
  );
};

export default DailyTarget;
