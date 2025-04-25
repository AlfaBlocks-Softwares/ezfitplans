import { ChooseUsList } from "@/constants";
import ChooseCard from "./choosecard";

export default function WhyChooseUs() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-[40px] my-[26px]">
      <p className="text-smoky text-center text-wrap font-bold font-noto-serif text-4xl">
        Why choose EZ fit Plans
      </p>

      <div className="w-full flex justify-center items-center gap-[40px] flex-wrap">
        {ChooseUsList?.map((itm) => (
          <ChooseCard key={itm?.title} itm={itm} />
        ))}
      </div>
    </main>
  );
}
