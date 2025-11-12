"use client";
import { useDate } from "./DateContext";

export default function CenterRule() {
  const { dates } = useDate();

  return (
    <div className="relative w-full h-full">
      {/* Ligne verticale pointillée */}
      <div className="absolute left-[95%] inset-y-0 border-l border-dashed border-gray-700 " />
      
      {/* Dates */}
      {dates.map(({ date, top }, i) => (
        <div
          key={i}
          className="absolute left-[75%] -translate-x-1/2 whitespace-nowrap text-sm text-gray-500 font-medium"
          style={{ top: `${top - 12}px` }}
        >
          {date}
        </div>
      ))}
    </div>
  );
}
