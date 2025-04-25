import { IWhyChooseUs } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  itm: IWhyChooseUs;
}

const ChooseCard: React.FC<Props> = ({ itm }) => {
  return (
    <div className="w-[280px] h-[200px] shadow-drop bg-primary-bg flex flex-col justify-center items-center gap-[16px] rounded-[12px] border-l-8 border-l-secondary-bg p-[12px]">
      <Image src={itm?.icon} alt="card" className="w-[19px] h-[19px]" />
      <p className="font-poppins font-[400] text-center text-black text-sm">
        {itm?.title}
      </p>
    </div>
  );
};

export default ChooseCard;
