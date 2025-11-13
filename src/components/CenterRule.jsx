"use client";
import { useDate } from "./DateContext";

export default function CenterRule() {
  const { dates } = useDate();

  const handleDateClick = (date) => {
    // Trouver l'élément avec cette date
    const element = document.querySelector(`[data-date="${date}"]`);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Optionnel : mettre à jour l'URL avec l'ancre de la section
      const anchor = element.getAttribute("id");
      if (anchor) {
        window.history.pushState(null, "", `#${anchor}`);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Ligne verticale pointillée */}
      <div className="absolute left-[95%] inset-y-0 border-l border-dashed border-gray-700" />
      
      {/* Dates cliquables */}
      {dates.map(({ date, top }, i) => (
        <button
          key={i}
          onClick={() => handleDateClick(date)}
          className="absolute left-[75%] -translate-x-1/2 whitespace-nowrap text-sm text-gray-500 font-medium hover:text-sky-400 transition-colors cursor-pointer"
          style={{ top: `${top - 12}px` }}
        >
          {date}
        </button>
      ))}
    </div>
  );
}