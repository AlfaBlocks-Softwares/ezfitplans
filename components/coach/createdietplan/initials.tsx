import { Input } from "@/design-system";
import React from "react";

const Initials = () => {
  return (
    <section className="my-[12px] bg-primary rounded-xl border-1 border-muted p-[12px] grid grid-cols-5 gap-[30px]">
      <div className="flex flex-col justify-start items-start gap-[14px]">
        <p className="text-2xl font-bold font-noto-serif">Diet Plan</p>
        <Input variant={"dashboard"} placeholder="Name" />
        <Input variant={"dashboard"} placeholder="Duration" />
      </div>

      <div className="flex flex-col justify-start items-start gap-[14px]">
        <p className="text-2xl font-bold font-noto-serif">Client Details</p>
        <Input variant={"dashboard"} placeholder="John" />
        <Input variant={"dashboard"} placeholder="Dietary pattern" />
      </div>

      <div className="flex flex-col justify-end items-start gap-[14px]">
        <Input variant={"dashboard"} placeholder="Gender" />
        <Input variant={"dashboard"} placeholder="Diabetes" />
      </div>

      <div className="flex flex-col justify-end items-start gap-[14px]">
        <Input variant={"dashboard"} placeholder="1 kg" />
        <Input variant={"dashboard"} placeholder="Current Dietary Intake" />
      </div>

      <div className="flex flex-col justify-end items-start gap-[14px]">
        <Input variant={"dashboard"} placeholder="Goal" />
        <Input variant={"dashboard"} placeholder="Supplements Taken" />
      </div>

      <Input
        variant={"dashboard"}
        className="!col-span-5 w-full max-w-full"
        placeholder="Description"
      />
    </section>
  );
};

export default Initials;
