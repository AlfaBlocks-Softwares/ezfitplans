"use client";
import React, { useState } from "react";

interface CheckboxProps {
  label?: string;
  labelClassName?: string;
  className?: string;
  showBorder?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = "Remeber my choice",
  labelClassName = "",
  className = "",
  showBorder = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  };

  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`
          inline-block 
          w-5 
          h-5 
          mr-2 
          rounded 
          relative
          transition-all
          duration-200
          ease-in-out
        `}
        style={{
          backgroundColor: isChecked ? "var(--secondary-bg)" : "transparent",
          border: showBorder
            ? "2px solid var(--secondary-bg)"
            : isChecked
            ? "none"
            : "2px solid var(--primary-bg)",
        }}
      >
        {isChecked && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5L4 8.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span
        className={`select-none text-primary text-[14px] font-poppins font-[400] ${labelClassName}`}
      >
        {label}
      </span>
    </label>
  );
};
