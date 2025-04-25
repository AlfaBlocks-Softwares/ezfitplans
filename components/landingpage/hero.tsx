import { search } from "@/assets";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="my-[12px] w-full min-h-[90dvh] flex flex-col justify-start items-center gap-[12px]">
      <div className="relative w-[80%] lg:w-full  lg:max-w-[780px]">
        <Image
          src={search}
          alt=""
          className="absolute top-[10px] left-[10px]"
        />
        <input
          type="text"
          placeholder="Search"
          className="rounded-[12px] border-2 border-muted h-[45px] w-full pl-[50px]"
        />
      </div>
      <div className="w-full flex justify-between items-center gap-[100px] flex-wrap">
        <div>
          <p>Achieve Your Health Goals with Expert Guidance!</p>
          <p>
            "Join the EZ fit plans community and transform your fitness journey.
            Our expert coaches and personalized programs are designed to help
            you achieve your goals and exceed your expectations. Ready to make a
            change?"
          </p>
        </div>
      </div>
    </main>
  );
}
