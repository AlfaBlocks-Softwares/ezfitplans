import React, { ReactNode } from "react";
import { cn } from "@/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

const FormGroup: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={
        (cn(
          "pl-6 md:pl-8 flex flex-col gap-spacing-xs justify-start items-start"
        ),
        className)
      }
    >
      {children}
    </div>
  );
};

export default FormGroup;
