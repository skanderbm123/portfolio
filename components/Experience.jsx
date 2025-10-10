"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { experienceData, assets } from "@/assets/assets";

const Experience = () => {
  const sectionRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll(".exp-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.opacity = 0;
              card.style.transform = "translateY(30px)";
              setTimeout(() => {
                card.classList.add(
                  i % 2 === 0
                    ? "animate-slide-up-left"
                    : "animate-slide-up-right"
                );
              }, i * 200);
            });
          } else {
            cards.forEach((card) => {
              card.classList.remove(
                "animate-slide-up-left",
                "animate-slide-up-right"
              );
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full min-h-screen px-[12%] py-20 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Experience</h4>
      <h2 className="text-center text-5xl font-Ovo red-underline relative">
        Work Experience
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Companies I’ve worked and collaborated with:
      </p>

      <div className="grid md:grid-cols-2 [grid-template-columns:var(--cols-auto)] gap-8 my-10">
        {experienceData.map(
          (
            {
              logoLight,
              logoDark,
              company,
              title,
              years,
              location,
              description,
              link,
            },
            index
          ) => (
            <div
              key={index}
              className="exp-card opacity-0 border border-gray-200 dark:border-white/10 
           p-8 rounded-2xl bg-white/80 dark:bg-[#141414]/60
           hover:scale-[1.03] shadow-md hover:shadow-lg
           transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-5 flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-md transition-all duration-300">
                <Image
                  src={isDark ? logoDark : logoLight}
                  alt={company}
                  width={60}
                  height={60}
                  className="object-contain transition-opacity duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold font-Ovo text-gray-900 dark:text-white">
                {company}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1 italic">
                {" "}
                {title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {years} • {location}
              </p>

              <p
                className="text-[15px] sm:text-[16px] text-gray-800 dark:text-gray-200 
             leading-relaxed text-justify tracking-[0.015em]"
              >
                {description}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--color-light-hover)] font-medium 
                             dark:text-white/90 hover:underline"
                >
                  Visit Website
                  <Image
                    src={assets.right_arrow}
                    alt="arrow"
                    className="w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
