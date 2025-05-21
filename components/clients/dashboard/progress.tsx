"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ClientProgressTracking = () => {
  return (
    <section className="min-h-[255px] rounded-xl my-[12px] w-full bg-primary p-[12px] flex flex-col justify-start items-start gap-[12px]">
      <p className="mt-[32px] text-2xl font-bold font-noto-serif text-black">
        Progress Tracking
      </p>
      <div className="w-full flex justify-center items-center gap-[54px]">
        <CircularProgressbarWithChildren
          value={66}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#436B2A",
            },
          }}
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm font-poppins text-black">cal</p>
            <p className="text-sm font-poppins text-black">75%</p>
          </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={40}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#9E1F18",
            },
          }}
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm font-poppins text-black wrap-break-word">
              Weight Loss
            </p>
            <p className="text-sm font-poppins text-black">40%</p>
          </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={50}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#4D547E",
            },
          }}
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm font-poppins text-black">Carbs</p>
            <p className="text-sm font-poppins text-black">50%</p>
          </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={75}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#056663",
            },
          }}
        >
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm font-poppins text-black">Protein</p>
            <p className="text-sm font-poppins text-black">75%</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </section>
  );
};

export default ClientProgressTracking;
