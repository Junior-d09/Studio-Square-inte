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
      anchor: "chat",
    },
    {
      id: 2,
      image: "/images/emails.png",
      title: "✨ Emails",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 7, 2025",
      anchor: "emails",
    },
    {
      id: 3,
      image: "/images/task-management.webp",
      title: "✨ Task Management",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 5, 2025",
      anchor: "task-management",
    },
    {
      id: 4,
      image: "/images/circle.png",
      title: "✨ Circle",
      url: "#",
      description:
        "Project management interface inspired by Linear. Built with Next.js and shadcn/ui.",
      date: "Nov 3, 2025",
      anchor: "circle",
    },
  ];

  const socials = [
    { name: "Live Demo", url: "https://github.com" },
    { name: "GitHub", url: "https://github.com/Junior-d09" },
    { name: "Designs", url: "https://countdown-years.netlify.app/" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            const date = entry.target.getAttribute("data-date");
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

  useEffect(() => {
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    handleInitialScroll();
    window.addEventListener("hashchange", handleInitialScroll);

    return () => {
      window.removeEventListener("hashchange", handleInitialScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl flex flex-col space-y-32 pt-12">
        {items.map((item, i) => (
          <div
            key={item.id}
            id={item.anchor}
            ref={(el) => (itemRefs.current[i] = el)}
            data-date={item.date}
            className="w-full scroll-mt-24"
          >
            {/* Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6 shadow-2xl border border-gray-800/50">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-sky-400 mb-3 text-2xl font-semibold">
              <Link
                href={`#${item.anchor}`}
                className="hover:text-sky-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.anchor);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    window.history.pushState(null, "", `#${item.anchor}`);
                  }
                }}
              >
                {item.title}
              </Link>
            </h3>

            <p className="text-gray-400 mb-6 text-base leading-relaxed">
              {item.description}
            </p>

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
    </div>
  );
}
