import { topIcon } from "@/assets";
import Image from "next/image";
import React from "react";

export interface ContributorCardProps {
  name: string;
  level: string;
  profileImageUrl?: string;
  progress: number;
}

const ContributorCard: React.FC<ContributorCardProps> = ({
  name,
  level,
  profileImageUrl,
  progress,
}) => {
  return (
    <div className="flex flex-col h-max justify-start items-start gap-4 p-3 w-[540px]">
      <div className="w-full flex justify-between items-center space-x-4">
        <div className="w-full flex gap-3">
          {profileImageUrl ? (
            <Image
              src={profileImageUrl}
              alt={name}
              className="w-[50px] h-[50px] object-cover"
            />
          ) : (
            <div className="bg-muted rounded-[50%] w-[50px] h-[50px]"></div>
          )}
          <div className="flex flex-col justify-start items-start gap-1">
            <h4 className="font-noto-serif text-lg text-black font-bold">
              {name}
            </h4>
            <p className="font-poppins text-xs text-black font-[400]">
              {level}
            </p>
          </div>
        </div>

        <div className="w-full justify-end flex gap-1">
          <Image src={topIcon} alt="award" className="w-[24px] h-[24px]" />
          <p className="font-poppins text-xs text-black font-[400]">
            Top Contributor
          </p>
        </div>
      </div>

      <div className="w-full h-1.5 bg-muted rounded-full">
        <div
          className="h-1.5 bg-secondary-bg rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ContributorCard;
