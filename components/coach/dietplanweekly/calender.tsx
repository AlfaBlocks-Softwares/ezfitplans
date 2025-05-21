"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { righticon, lefticon } from "@/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Event types
type EventType = "Diet Plan";

interface CalendarEvent {
  date: string;
  type: EventType;
  title: string;
  color?: string;
}

// Get current month's dates
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Example events data with current month's dates
const events: CalendarEvent[] = [
  {
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-08`,
    type: "Diet Plan",
    title: "Diet Plan",
    color: "#FFA500", // Orange
  },
  {
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-11`,
    type: "Diet Plan",
    title: "Diet Plan",
    color: "#FFA500",
  },
  {
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-15`,
    type: "Diet Plan",
    title: "Diet Plan",
    color: "#FFA500",
  },
  {
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-22`,
    type: "Diet Plan",
    title: "Diet Plan",
    color: "#FFA500",
  },
];

export default function DietPlanWeeklyCalendar() {
  const calendarRef = useRef<FullCalendar>(null);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // Custom header render
  const renderCustomHeader = () => {
    return (
      <div className="flex items-center justify-between p-3 bg-secondary-bg min-h-[50px] h-full w-full my-3">
        <button
          onClick={() => calendarRef.current?.getApi().prev()}
          type="button"
          className="cursor-pointer"
        >
          <Image src={lefticon} alt="left" className="w-6 h-6" />
        </button>
        <span className="text-primary font-bold text-2xl">{currentTitle}</span>
        <button
          onClick={() => calendarRef.current?.getApi().next()}
          type="button"
          className="cursor-pointer"
        >
          <Image src={righticon} alt="right" className="w-6 h-6" />
        </button>
      </div>
    );
  };

  return (
    <div className="rounded-xl border-1 border-muted my-[12px] w-full bg-primary p-[12px] flex flex-col justify-start items-center gap-[12px]">
      <div className="custom-calendar max-w-[1100px] w-full">
        {renderCustomHeader()}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          height="auto"
          events={events.map((event) => ({
            backgroundColor: "transparent",
            borderColor: "transparent",
            title: event.title,
            date: event.date,
            textColor: event.color,
          }))}
          dayHeaderFormat={{ weekday: "long" }}
          dayMaxEvents={true}
          datesSet={(dateInfo) => {
            setCurrentTitle(dateInfo.view.title);
          }}
        />
      </div>
    </div>
  );
}
