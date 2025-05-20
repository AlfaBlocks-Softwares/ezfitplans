import React from "react";
import Image from "next/image";
import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";

interface IUserAverageReviews {
  name: string;
  title: string;
  rating: number;
  totalReviews: number;
  ratingDistribution: { [key: number]: number };
}

const UserAverageReviews = ({ user }: { user: IUserAverageReviews }) => {
  const { name, title, rating, totalReviews, ratingDistribution } = user;

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-4">
      <div className="w-max flex flex-row justify-start items-start gap-4">
        <div className="w-20 h-20 rounded-[50%] bg-muted"></div>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="font-noto-serif text-black font-bold text-2xl">
            {name}
          </p>
          <p className="font-poppins text-muted font-[400] text-sm">{title}</p>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center gap-20">
        <div className="w-full max-w-[150px] flex flex-col justify-start items-start">
          <p className="text-sm text-black font-[400] font-poppins">Reviews</p>
          <h3 className="text-4xl font-bold font-noto-serif">{rating}</h3>
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
          <span className="text-sm text-black font-[400] font-poppins mt-3">
            {totalReviews} Reviews
          </span>
        </div>

        <div className="w-full max-w-[450px]">
          {[5, 4, 3, 2, 1].map((num) => (
            <div key={num} className="flex items-center mt-1">
              <span className="w-3 text-xs text-gray-600">{num}</span>
              <div className="w-full h-2 mx-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-teal-600 rounded"
                  style={{ width: `${ratingDistribution[num]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAverageReviews;
