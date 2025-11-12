"use client";
import { useDate } from "./DateContext";

export default function CenterRule() {
  const { dates } = useDate();

  return (
    <div className="relative w-full h-full">
      {/* Ligne pointillée déplacée vers la droite */}
      <div className="absolute left-[95%] inset-y-0 border-l border-dashed border-gray-700 " />
      
      {/* 📅 Affichage des dates au niveau des images */}
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




// "use client";

// export default function CenterRule() {
//   return (
//     <div className="relative flex flex-col items-center w-[1px] bg-transparent">
//       {/* Ligne pointillée */}
//       <div className="absolute inset-y-0 w-[1px] border-l border-dashed border-sky-900 opacity-60" />

//       {/* Lueur centrale */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-14 bg-sky-200 rounded-full shadow-[0_0_8px_2px_rgba(56,189,248,0.5)]" />
//     </div>
//   );
// }
