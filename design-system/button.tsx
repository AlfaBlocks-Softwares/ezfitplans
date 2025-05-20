"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold disabled:pointer-events-none disabled:opacity-50 font-poppins h-max w-max cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-bg text-primary font-bold rounded-[12px] text-[14px]",
        secondary:
          "bg-primary-bg text-secondary font-bold rounded-[12px] text-[16px]",
        outline:
          "bg-primary border-1 border-secondary-bg rounded-[12px] text-secondary-bg text-[14px]",
        text: "!p-0 !px-0 !py-0",
      },
      size: {
        default: "px-[26px] py-[14px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, disabled, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";
