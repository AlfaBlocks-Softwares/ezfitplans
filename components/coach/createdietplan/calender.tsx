"use client";
// WorkoutDietCalendar.tsx
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { CalendarProps } from "antd";

// Example event data
const events = [
  { date: "2025-01-08", type: "Diet Plan" },
  { date: "2025-01-09", type: "Diet Plan" },
  { date: "2025-01-10", type: "Diet Plan" },
  { date: "2025-01-11", type: "Diet Plan" },
  { date: "2025-01-12", type: "Diet Plan" },
  { date: "2025-01-13", type: "Diet Plan" },
];

// Render event labels on each date
const dateCellRender: CalendarProps<Dayjs>["dateCellRender"] = (value) => {
  const formattedDate = value.format("YYYY-MM-DD");
  const dayEvents = events.filter((event) => event.date === formattedDate);

  return (
    <ul className="events list-none p-0 m-0">
      {dayEvents.map((item, index) => (
        <li key={index} className="text-orange-500 text-xs text-center mt-1">
          {item.type}
        </li>
      ))}
    </ul>
  );
};

export default function WorkoutDietCalendar() {
  return (
    <div className="p-6">
      <div className="flex justify-center mb-2">
        <div className="rounded-full bg-purple-600 w-10 h-10 flex items-center justify-center text-white font-bold shadow-lg">
          R
        </div>
      </div>
      <Calendar
        dateCellRender={dateCellRender}
        fullscreen={false}
        headerRender={({ value, onChange }) => (
          <div className="flex items-center justify-between p-2 bg-teal-700 rounded-t">
            <button
              onClick={() => onChange(value.clone().subtract(1, "month"))}
            >
              &lt;
            </button>
            <span className="text-white font-bold">
              {value.format("MMMM YYYY")}
            </span>
            <button onClick={() => onChange(value.clone().add(1, "month"))}>
              &gt;
            </button>
          </div>
        )}
      />
    </div>
  );
}
