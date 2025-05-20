import { like } from "@/assets";
import { Button } from "@/design-system";
import { ICommunityCard } from "@/types";
import Image from "next/image";

export default function CommunityCard({
  title,
  subtitle,
  NoOfComments,
}: ICommunityCard) {
  return (
    <div className="rounded-[12px] border-1 border-muted p-8 flex flex-col justify-start items-start gap-4 h-[200px]">
      <p className="font-noto-serif text-xl font-bold text-black">{title}</p>
      <p className="font-poppins text-sm font-[400] text-black">{subtitle}</p>
      <div className="w-full flex justify-between items-center gap-1">
        <p className="font-poppins text-sm font-[400] text-black">
          Comments({NoOfComments})
        </p>
        <div className="flex gap-6">
          <Button>Follow Thread</Button>
          <Image
            src={like}
            alt=""
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
