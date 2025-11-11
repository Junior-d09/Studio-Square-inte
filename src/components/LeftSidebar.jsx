"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ import de Link
import { BookOpen, Github } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="relative h-full flex flex-col justify-center px-16 text-white overflow-hidden bg-gradient-to-b from-[#020617] to-[#0a0f1c]">
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
        
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          {/* Logo SVG */}
          <div className="bg-white text-black rounded-md px-2 py-1 shadow flex items-center justify-center">
            <Image
              src="/Images/icon.svg" // Assure-toi que le fichier est dans /public/Images/
              alt="Logo Square UI"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>

          {/* Nom */}
          <h1 className="text-2xl font-semibold tracking-tight">Square UI</h1>
        </Link>

        {/* Texte principal */}
        <div>
          <h2 className="text-4xl font-semibold leading-snug mb-3">
            Open-source layouts <br />
            by{" "}
            <span className="text-sky-400 hover:text-sky-300 transition-colors">
              Indev-ui
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-8">
            Collection of beautifully crafted open-source layouts UI built with
            shadcn/ui.
          </p>
        </div>

        {/* Boutons d’action */}
        <div className="flex items-center space-x-6 text-gray-300">
          <button className="flex items-center space-x-2 hover:text-white transition">
            <BookOpen size={18} />
            <span>Sponsor</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white transition">
            <Github size={18} />
            <span>GitHub</span>
          </button>
        </div>
      </div>

      {/* Auteur */}
      <div className="absolute bottom-6 left-16 text-sm text-gray-500">
        Built by{" "}
        <span className="font-semibold text-gray-300">Leonel Ngoya</span>
      </div>

      {/* Date */}
      <div className="absolute top-6 right-10 text-xs text-gray-500">
        Nov 9, 2025
      </div>
    </div>
  );
}
