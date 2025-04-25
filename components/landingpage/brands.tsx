import { brandslist } from "@/constants";
import Image from "next/image";

export default function Brands() {
  return (
    <main className="my-[26px] w-full flex justify-start items-center gap-[90px]">
      {brandslist?.map((itm) => (
        <Image src={itm?.image} alt="" />
      ))}
    </main>
  );
}
