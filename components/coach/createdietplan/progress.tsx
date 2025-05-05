"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressTracking = () => {
  return (
    <section className="min-h-[255px] rounded-xl border-1 border-muted my-[12px] w-full bg-primary p-[12px] flex flex-col justify-start items-start gap-[12px]">
      <p className="mt-[32px] text-2xl font-bold font-noto-serif text-black">
        Progress Tracking
      </p>
      <div className="w-full flex justify-center items-center gap-[54px]">
        <CircularProgressbarWithChildren
          value={66}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#C92C2C",
            },
          }}
        >
          <div>text</div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={66}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#C92C2C",
            },
          }}
        >
          <div>text</div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={66}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#C92C2C",
            },
          }}
        >
          <div>text</div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={66}
          className="w-[122px] h-[122px] flex items-center justify-center"
          styles={{
            path: {
              stroke: "#C92C2C",
            },
          }}
        >
          <div>text</div>
        </CircularProgressbarWithChildren>
      </div>
    </section>
  );
};

export default ProgressTracking;
