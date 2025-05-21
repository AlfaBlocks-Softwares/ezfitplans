import { search } from "@/assets";
import { Input } from "@/design-system";
import Image from "next/image";
import PaymentHistory from "./history";
import PaymentForm from "./form";

export default function PaymentMain() {
  return (
    <main className="w-full h-full flex flex-col gap-2 my-2">
      <div className="w-full rounded-[12px] p-3 bg-primary flex justify-center items-center">
        <div className="w-full relative  max-w-[900px]">
          <Image
            src={search}
            alt="search"
            className="w-[18px] h-[18px] absolute left-4 top-3"
          />
          <Input
            className="pl-10 border-1 border-muted w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <PaymentForm />
      <PaymentHistory />
    </main>
  );
}
