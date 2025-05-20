import { success1, success2 } from "@/assets";
import Image from "next/image";

export default function SuccessStores() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-[24px] mt-[12px] mb-[30px]">
      <div className="flex flex-col justify-center items-center gap-[12px]">
        <p className="text-smoky text-center text-wrap font-bold font-noto-serif text-4xl">
          Sucess Stories
        </p>
        <p className="text-smkoy text-center text-wrap font-poppins font-[400] text-sm">
          From Sweat to Success: Real Stories, Real Transformations!
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-[24px] flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2">
          <Image src={success2} alt="success" className="max-h-[450px]"></Image>
          <div className="w-full flex justify-evenly items-center gap-16 sm:gap-32">
            <p className="font-poppins text-sm font-[400]">Before</p>
            <p className="font-poppins text-sm font-[400]">After</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image src={success1} alt="success" className="max-h-[450px]"></Image>
          <div className="w-full flex justify-evenly items-center gap-16 sm:gap-32">
            <p className="font-poppins text-sm font-[400]">Before</p>
            <p className="font-poppins text-sm font-[400]">After</p>
          </div>
        </div>
      </div>
    </main>
  );
}
