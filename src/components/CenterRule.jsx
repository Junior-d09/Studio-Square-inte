"use client";

export default function CenterRule() {
  return (
    <div className="relative flex flex-col items-center justify-center w-[1px] h-64 lg:h-full bg-transparent">
      {/* Ligne pointillée */}
      <div className="absolute h-full w-[0.25px] border-1 border-dashed border-sky-800 opacity-20" />

      {/* Lueur centrale */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-14 bg-sky-200 rounded-full shadow-[0_0_8px_2px_rgba(56,189,248,0.5)]" />

      {/* Date au centre */}
      <span className="absolute top-1/2 transform -translate-y-1/2 translate-x-5 text-xs text-gray-400 whitespace-nowrap">
        Nov 9, 2025
      </span>
    </div>
  );
}
