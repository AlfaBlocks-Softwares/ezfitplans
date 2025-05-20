"use client";
import { Input } from "@/design-system";
import { search } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import BookingCard, { SessionCardProps } from "./card";

export const sessionCardsData: SessionCardProps[] = [
  {
    coachName: "John Doe",
    sessionType: "Video",
    price: "$50 (30 min)",
    buttonLabel: "Confirm & Pay",
  },
  {
    coachName: "John Doe",
    sessionType: "Audio",
    price: "$50 (30 min)",
    buttonLabel: "Confirm",
  },
  {
    coachName: "John Doe",
    sessionType: "Audio",
    price: "$50 (30 min)",
    buttonLabel: "Confirm",
  },
  {
    coachName: "John Doe",
    sessionType: "Video",
    price: "$50 (30 min)",
    buttonLabel: "Confirm & Pay",
  },
  {
    coachName: "John Doe",
    sessionType: "Audio",
    price: "$50 (30 min)",
    buttonLabel: "Confirm",
  },
  {
    coachName: "John Doe",
    sessionType: "Audio",
    price: "$50 (30 min)",
    buttonLabel: "Confirm",
  },
];

const Booking = () => {
  return (
    <main className="w-full h-full flex flex-col gap-2 my-2">
      <div className="w-full rounded-[12px] p-3 bg-primary flex justify-center items-center">
        <div className="w-full relative  max-w-[900px]">
          <Image
            src={search}
            alt="search"
            className="w-[18px] h-[18px] absolute left-4 top-3"
          />
          <Input
            className="pl-10 border-1 border-muted w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 bg-primary rounded-[12px] p-3 h-full">
        {sessionCardsData.map((session, index) => (
          <BookingCard key={index} {...session} />
        ))}
      </div>
    </main>
  );
};

export default Booking;
