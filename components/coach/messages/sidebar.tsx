import { usersDataForMessage } from "@/constants";
import Image from "next/image";

interface CoachInboxSideBarProps {
  onSelect: (index: number) => void;
  selectedIndex: number;
}

export default function CoachInboxSideBar({
  onSelect,
  selectedIndex,
}: CoachInboxSideBarProps) {
  return (
    <div className="h-full w-max bg-secondary-bg text-primary  rounded-xl p-11 overflow-auto hide-scrollbar">
      <ul className="w-full flex flex-col gap-5 pr-20">
        {usersDataForMessage?.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <li
              key={item.name}
              className={`w-[235px] p-3 rounded-xl font-bold text-sm cursor-pointer ${
                isSelected
                  ? "bg-primary text-secondary"
                  : "hover:bg-primary text-primary hover:text-secondary"
              }`}
              onClick={() => onSelect(index)}
            >
              <div className="flex justify-start items-center gap-4">
                {item?.profile ? (
                  <Image
                    src={item?.profile}
                    alt="profile"
                    className="w-[50px] h-[50px] rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className="w-[50px] h-[50px] rounded-full bg-muted" />
                )}
                {item?.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
