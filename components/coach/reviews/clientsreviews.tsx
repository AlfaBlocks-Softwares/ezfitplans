// ClientReviews.jsx
import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";
import React from "react";
interface ReviewCardProps {
  review: {
    name: string;
    type: string;
    rating: number;
    comment: string;
  };
}
const ReviewCard = ({ review }: ReviewCardProps) => {
  const { name, type, rating, comment } = review;

  return (
    <div className="w-full">
      <div className="flex items-center space-x-4">
        <div className="w-[50px] h-[50px] bg-muted rounded-full"></div>
        <div>
          <h3 className="font-noto-serif text-black font-bold text-2xl">
            {name}
          </h3>
          <p className="font-poppins text-muted font-[400] text-sm">{type}</p>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((value) => {
            const isActive = value <= rating;
            const Icon = isActive ? StarFilled : StarOutlined;

            return (
              <button
                key={value}
                type="button"
                className="w-10 h-10 flex items-center justify-center text-xl cursor-pointer"
              >
                <Icon
                  style={{ color: isActive ? "#facc15" : "var(--muted)" }}
                />
              </button>
            );
          })}
        </div>
        {comment && (
          <p className="font-poppins text-black font-[400] text-sm">
            {comment}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
