"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { StarFilled, StarOutlined } from "@ant-design/icons";

type StarRatingProps = {
  name: string;
};

const StarRating: React.FC<StarRatingProps> = ({ name }) => {
  const { setValue, watch } = useFormContext();
  const rating = watch(name, 0);

  const handleClick = (value: number) => {
    setValue(name, value);
  };

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((value) => {
        const isActive = value <= rating;
        const Icon = isActive ? StarFilled : StarOutlined;

        return (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            className="w-10 h-10 flex items-center justify-center text-xl cursor-pointer"
          >
            <Icon style={{ color: isActive ? "#facc15" : "#d1d5db" }} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
