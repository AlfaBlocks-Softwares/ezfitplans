import { cn } from "@/utils";
import React, { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  IconStyles?: string;
  title: string;
  description: string | number;
  className?: string;
  mainTheme: string;
}

const Badges: React.FC<Props> = ({
  Icon,
  IconStyles,
  title,
  description,
  className,
  mainTheme,
}) => {
  return (
    <div
      className={cn(
        `opacity-40 border-0 w-max h-max p-spacing-l flex flex-row justify-start items-center gap-spacing-xxs rounded-xl bg-${mainTheme}`,
        className
      )}
    >
      <span className={IconStyles}>{Icon}</span>
      <div className="flex flex-col justify-center items-start gap-spacing-xxs">
        <span className={`text-primary font-bold`}>{title}</span>
        <span className="text-black">{description}</span>
      </div>
    </div>
  );
};

export default Badges;
