"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { experienceData, assets } from "@/assets/assets";

const Experience = () => {
  const sectionRef = useRef(null);

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

      <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
        {experienceData.map(
          (
            { logo, company, title, years, location, description, link },
            index
          ) => (
            <div
              key={index}
              className="exp-card opacity-0 border border-black/10 dark:border-white/15
                         p-8 rounded-2xl bg-white/70 dark:bg-white/[0.02]
                         hover:bg-[var(--color-light-hover)]/15 dark:hover:bg-white/[0.08]
                         hover:scale-[1.03] shadow-sm transition-all duration-300
                         flex flex-col items-center text-center"
            >
              {/* Company Logo */}
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-5 flex items-center justify-center bg-white/80 dark:bg-white/10 shadow-md">
                <Image
                  src={logo}
                  alt={company}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Company Info */}
              <h3 className="text-xl font-semibold font-Ovo">{company}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {years} • {location}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {description}
              </p>

              {/* Visit Website */}
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
