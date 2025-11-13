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
      {/* Ligne verticale pointillée au centre */}
      <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 border-l border-dashed border-blue-600" />

      {/* Affichage des dates + trait horizontal */}
      {dates.map(({ date, top }, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-end left-1/2 -translate-x-full"
          style={{ top: `${top - 10}px` }}
        >
          {/* Texte de la date */}
          <button
            onClick={() => handleDateClick(date)}
            className="text-sm text-gray-400 hover:text-sky-400 font-medium transition-colors whitespace-nowrap text-right pr-2"
          >
            {date}
          </button>

          {/* Trait */}
          <div className="w-4 h-px bg-white" />
        </div>
      ))}
    </div>
  );
}
