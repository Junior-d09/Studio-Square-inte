"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardGrid() {
  const items = [
    {
      id: 1,
      image: "/images/chat.webp",
      title: "✨ Chat",
      description:
        "Modern AI chat interface with conversation history and intelligent assistant. Built with Next.js and shadcn/ui.",
    },
    {
      id: 2,
      image: "/images/chat.webp",
      title: "🖼 Profile",
      description:
        "User profile page with customizable avatar, bio, and social links. Built with Next.js and TailwindCSS.",
    },
    {
      id: 3,
      image: "/images/chat.webp",
      title: "📊 Dashboard",
      description:
        "Analytics dashboard with charts and insights for user activities. Responsive design with Next.js and TailwindCSS.",
    },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "WhatsApp", url: "https://wa.me/" },
  ];

  return (
    <div className="p-12 space-y-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl p-6 text-left max-w-6xl mx-auto"
        >
          {/* Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Titre */}
          <h3 className="text-sky-400 mb-2 text-xl font-semibold">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6">{item.description}</p>

          {/* Liste cliquable avec puces alignées */}
          <ul className="space-y-2 pl-5 list-disc marker:text-[#00BCFF]">
            {socials.map((social) => (
              <li key={social.name} className="leading-relaxed">
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00BCFF] hover:text-white transition-colors"
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
