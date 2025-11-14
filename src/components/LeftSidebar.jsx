"use client";

import { BookOpen, Github } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="relative h-full flex flex-col justify-between px-6 py-8 md:justify-center md:items-end md:px-8 md:pl-24 md:pr-16 md:py-12 text-white overflow-hidden bg-[#020817] gap-8">
      {/* Effet bleu */}
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-blue-500/15 via-blue-600/8 to-transparent pointer-events-none z-[1]" />

      {/* Fond étoiles */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-40"
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 800}
              cy={Math.random() * 600}
              r={Math.random() * 1.2 + 0.3}
              fill="white"
              opacity={Math.random() * 0.9 + 0.1}
            />
          ))}
          <line
            x1="150"
            y1="80"
            x2="200"
            y2="120"
            stroke="#5bb5ff"
            strokeWidth="0.4"
          />
          <line
            x1="200"
            y1="120"
            x2="230"
            y2="90"
            stroke="#5bb5ff"
            strokeWidth="0.4"
          />
          <line
            x1="350"
            y1="300"
            x2="400"
            y2="340"
            stroke="#5bb5ff"
            strokeWidth="0.4"
          />
          <line
            x1="400"
            y1="340"
            x2="440"
            y2="310"
            stroke="#5bb5ff"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-start text-left space-y-6 w-full md:space-y-10 md:max-w-md">
        {/* Logo et nom */}
        <a
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition"
        >
          <div className="bg-white text-black rounded-md px-2 py-1 shadow flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Square UI</h1>
        </a>

        {/* Sous-titre et description */}
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-4xl md:text-4xl font-light leading-snug">
            Open-source layouts <br />
            by{" "}
            <a
              href="https://github.com/indev-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline underline-offset-4 hover:text-sky-300 transition-colors"
            >
              Indev-ui
            </a>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Collection of beautifully crafted open-source layouts UI built with
            shadcn/ui.
          </p>
        </div>

        {/* Liens sociaux */}
        <div className="flex items-center justify-center md:justify-start space-x-6 text-gray-300 w-full md:w-auto">
          <a
            href="https://github.com/sponsors/indev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-300 transition"
          >
            <BookOpen size={18} />
            <span className="text-sm md:text-base">Sponsor</span>
          </a>

          <a
            href="https://github.com/indev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-300 transition"
          >
            <Github size={18} />
            <span className="text-sm md:text-base">GitHub</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-center md:justify-start space-x-2 text-xs md:text-sm text-gray-400 w-full md:w-auto md:absolute md:bottom-6 md:right-8 md:left-24">
        <a
          href="https://x.com/juniordfs09"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-bue-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
          </svg>

          <span>
            Built by{" "}
            <span className="font-semibold text-gray-300">Leonel Ngoya</span>
          </span>
        </a>

      </div>
    </div>
  );
}