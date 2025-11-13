"use client";
import { useDate } from "./DateContext";

export default function CenterRule() {
  const { dates } = useDate();

  const handleDateClick = (date) => {
    const element = document.querySelector(`[data-date="${date}"]`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const anchor = element.getAttribute("id");
      if (anchor) {
        window.history.pushState(null, "", `#${anchor}`);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Ligne verticale pointillée - centrée dans la colonne */}
      <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 border-l border-dashed border-gray-700" />

      {/* Dates cliquables - positionnées à gauche de la ligne */}
      {dates.map(({ date, top }, i) => (
        <button
          key={i}
          onClick={() => handleDateClick(date)}
          className="absolute left-1/2 -translate-x-full pr-4 whitespace-nowrap text-sm text-gray-500 font-medium hover:text-sky-400 transition-colors cursor-pointer text-right"
          style={{ top: `${top - 12}px` }}
        >
          {date}
        </button>
      ))}
    </div>
  );
}
