"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useDate } from "./DateContext";

export default function RightSidebar() {
  const { setDates } = useDate();
  const itemRefs = useRef([]);

  const items = [
    {
      id: 1,
      image: "/images/chat.webp",
      title: "✨ Chat",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 9, 2025",
    },
    {
      id: 2,
      image: "/images/emails.png",
      title: "✨ Emails",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 7, 2025",
    },
    {
      id: 3,
      image: "/images/task-management.webp",
      title: "✨ Task Management",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 5, 2025",
    },
    {
      id: 4,
      image: "/images/circle.png",
      title: "✨ Circle",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 3, 2025",
    },
  ];

  const socials = [
    { name: "Live Demo", url: "https://github.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Designs", url: "#" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            const date = entry.target.getAttribute("data-date");
            // 📍 Position absolue depuis le haut de la page
            const top = rect.top + window.scrollY;

            setDates((prev) => {
              const exists = prev.find((d) => d.date === date);
              if (!exists) {
                return [...prev, { date, top }];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [setDates]);

  return (
    <div className="p-12 space-y-32">
      {items.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (itemRefs.current[i] = el)}
          data-date={item.date}
          className="rounded-2xl p-6 text-left max-w-5xl mx-auto"
        >
          {/* Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6 shadow-2xl">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="object-cover rounded-xl"
            />
          </div>

          <h3 className="text-sky-400 mb-3 text-2xl font-semibold">
            {item.url ? (
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
              >
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </h3>

          <h6 className="text-gray-400 mb-6 text-base leading-relaxed">
            {item.description}
          </h6>

          <ul className="space-y-3 pl-5 list-disc marker:text-sky-400">
            {socials.map((social) => (
              <li key={social.name} className="leading-relaxed">
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors text-base"
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
