import { cn } from "@/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

const inputVariants = cva(
  "flex w-full disabled:cursor-not-allowed disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "h-[45px] rounded-[12px] border-2 border-primary px-3 py-2",
        dashboard:
          "max-w-[250px] h-[45px] rounded-[12px] border-1 border-muted px-3 py-2 font-poppins text-xs text-muted",
        password:
          "h-[45px] rounded-[12px] border-2 border-primary px-3 py-2 relative",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string;
  children?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, error, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ variant }),
            error && "border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {children}
      </div>
    );
  }
);

Input.displayName = "Input";
