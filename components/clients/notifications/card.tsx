"use client";
import React from "react";

type NotificationCardProps = {
  title: string;
  notifications: string[];
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  notifications,
}) => {
  return (
    <div className="w-full h-[150px] rounded-[12px] p-8 border border-muted flex flex-col justify-center items-start gap-2">
      {notifications?.map((itm) => (
        <p className="font-poppins text-sm text-black">{itm}</p>
      ))}
      <p className="font-poppins text-sm text-black">{title}</p>
    </div>
  );
};

export default NotificationCard;
