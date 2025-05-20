"use client";
import { useState } from "react";
import CoachInboxSideBar from "./sidebar";
import MessageBox from "./messagebox";
import { usersDataForMessage } from "@/constants";
import { Input } from "@/design-system";
import { attachment, microphone, phone, smile, video } from "@/assets";
import Image from "next/image";

export default function Inbox() {
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const selectedUser = usersDataForMessage[selectedUserIndex];

  return (
    <main className="w-full flex mt-3 h-[88dvh]">
      <CoachInboxSideBar
        onSelect={(index: number) => setSelectedUserIndex(index)}
        selectedIndex={selectedUserIndex}
      />
      <section className="h-full w-full bg-primary rounded-[12px] px-8 flex flex-col py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1
              className={`w-[16px] h-[16px] rounded-[50%] ${
                selectedUser?.isOnline ? "bg-[#00FF38]" : ""
              }`}
            ></h1>
            <h1 className="text-xl font-bold text-black">
              {selectedUser.name}
            </h1>
          </div>
          <div className="flex gap-12">
            <Image
              src={video}
              alt="video"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <Image
              src={phone}
              alt="phone"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 mt-20">
          {selectedUser.messages.map((msg, idx) => (
            <MessageBox
              key={idx}
              message={msg.message}
              time={msg.time}
              isSender={msg.send}
            />
          ))}
        </div>
        <div className="mt-4 relative">
          <Input
            type="text"
            placeholder="Message"
            variant={"secondary"}
            className="rounded-[12px]"
          />
          <div className="flex gap-2 absolute right-4 top-1/2 -translate-y-1/2">
            <Image
              src={attachment}
              alt="attachment"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <Image
              src={microphone}
              alt="microphone"
              className="w-[24px] h-[24px] cursor-pointer"
            />
            <Image
              src={smile}
              alt="smile"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
