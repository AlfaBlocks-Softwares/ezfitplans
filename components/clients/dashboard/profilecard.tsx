// components/clients/dashboard/WelcomeCard.tsx
import Image from "next/image";
import React from "react";

interface WelcomeCardProps {
  name: string;
  subscription: string;
  avatarUrl?: string; // Optional, for future use
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  name,
  subscription,
  avatarUrl,
}) => {
  return (
    <div className="w-full bg-primary rounded-2xl flex items-center px-8 py-6">
      <div className="w-[70px] h-[70px] rounded-full bg-muted flex items-center justify-center mr-8">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-muted rounded-[50%]"></div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-noto-serif font-bold text-2xl text-black">
          Welcome, {name}
        </span>
        <span className="text-muted text-sm mt-1">
          Current Subscription:{" "}
          <span className="font-semibold">{subscription}</span>
        </span>
      </div>
    </div>
  );
};

export default WelcomeCard;
