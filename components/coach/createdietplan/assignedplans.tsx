"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomizedCalendar = () => {
  // Sample events data for workout and diet plans
  const [events] = useState([
    { id: "1", title: "Workout Plan", date: "2025-01-09", color: "#008080" },
    { id: "2", title: "Diet Plan", date: "2025-01-10", color: "#FF8C66" },
    { id: "3", title: "Workout Plan", date: "2025-01-11", color: "#008080" },
  ]);

  // Custom event renderer
  const renderEventContent = (eventInfo) => {
    return (
      <div className="text-xs">
        <div style={{ color: eventInfo.event.textColor || "#000" }}>
          {eventInfo.event.title}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Assigned Plans</h1>
      <div className="">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          events={events}
          eventContent={renderEventContent}
          customButtons={{
            prev: {
              text: "<",
            },
            next: {
              text: ">",
            },
          }}
          dayHeaderFormat={{ weekday: "long" }}
          height="auto"
          fixedWeekCount={false}
          showNonCurrentDates={false}
          dayCellClassNames="h-16"
          dayHeaderClassNames=""
          titleFormat={{ month: "long" }}
          eventClassNames="rounded-sm p-1 text-xs"
          firstDay={1} // Monday as first day
          initialDate={Date.now()}
        />
      </div>
    </div>
  );
};

export default CustomizedCalendar;
