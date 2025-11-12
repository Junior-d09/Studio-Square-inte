"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Github } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="relative h-full flex flex-col justify-center px-16 text-white overflow-hidden bg-[#020817]">
      {/* 🔵 EFFET DE PROJECTION BLEUE sur le côté droit */}
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-blue-500/15 via-blue-600/8 to-transparent pointer-events-none z-[1]" />
      
      {/* Fond étoiles statique */}
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
          {/* Lignes de constellation */}
          <line x1="150" y1="80" x2="200" y2="120" stroke="#5bb5ff" strokeWidth="0.4" />
          <line x1="200" y1="120" x2="230" y2="90" stroke="#5bb5ff" strokeWidth="0.4" />
          <line x1="350" y1="300" x2="400" y2="340" stroke="#5bb5ff" strokeWidth="0.4" />
          <line x1="400" y1="340" x2="440" y2="310" stroke="#5bb5ff" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 space-y-6">
        {/* Logo et nom cliquables */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          <div className="bg-white text-black rounded-md px-2 py-1 shadow flex items-center justify-center">
            <Image
              src="/Images/icon.svg"
              alt="Logo Square UI"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Square UI</h1>
        </Link>

        {/* Titre principal avec lien souligné */}
        <div>
          <h2 className="text-4xl font-light leading-snug mb-3">
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

          <p className="text-gray-400 max-w-md mb-8">
            Collection of beautifully crafted open-source layouts UI built with
            shadcn/ui.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-gray-300">
          <a
            href="https://github.com/sponsors/indev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition"
          >
            <BookOpen size={18} />
            <span>Sponsor</span>
          </a>

          <a
            href="https://github.com/indev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-16 flex items-center space-x-2 text-sm text-gray-500">
        {/* Logo X SVG */}
        <a
          href="https://x.com/indev_ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M247.6 17.8c-9.2 4.1-19 6.8-29.4 8 10.6-6.4 18.8-16.5 22.6-28.6-9.9 5.9-20.8 10.1-32.5 12.4C204.3 0.8 192.2-1 180.2-1c-27.3 0-49.5 22.1-49.5 49.5 0 3.9 0.4 7.7 1.3 11.3-41.1-2-77.6-21.8-102.1-51.9-4.3 7.3-6.8 15.8-6.8 24.8 0 17.1 8.7 32.2 21.9 41-8.1-0.3-15.7-2.5-22.3-6.2v0.6c0 23.9 17 43.8 39.5 48.3-4.1 1.1-8.4 1.7-12.8 1.7-3.1 0-6.2-0.3-9.2-0.9 6.2 19.4 24 33.6 45.1 34-16.5 12.9-37.3 20.5-59.8 20.5-3.9 0-7.8-0.2-11.6-0.7 21.5 13.8 47 21.8 74.5 21.8 89.3 0 138-73.9 138-138 0-2.1 0-4.2-0.1-6.3C231.9 37.2 241 28.2 247.6 17.8z" />
          </svg>
        </a>

        {/* Nom */}
        <span>
          Built by <span className="font-semibold text-gray-300">Leonel Ngoya</span>
        </span>
      </div>
    </div>
  );
}