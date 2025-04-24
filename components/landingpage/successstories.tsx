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
      <div className="w-full flex justify-center items-center gap-[24px]">
        <div className="">
          <Image src={success2} alt="success" className="h-[450px]"></Image>
          <div>
            <p>Before</p>
            <p>After</p>
          </div>
        </div>
        <div className="">
          <Image src={success1} alt="success" className="h-[450px]"></Image>
          <div>
            <p>Before</p>
            <p>After</p>
          </div>
        </div>
      </div>
    </main>
  );
}
