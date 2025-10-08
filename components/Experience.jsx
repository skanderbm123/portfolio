"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { serviceData, assets } from "@/assets/assets";

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
              // Reset styles before animating
              card.style.opacity = 0;
              card.style.transform = "translateY(30px)";
              setTimeout(() => {
                card.classList.add(
                  i % 2 === 0
                    ? "animate-slide-up-left"
                    : "animate-slide-up-right"
                );
              }, i * 250);
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
      className="w-full -mt-8 min-h-screen px-[12%] py-16 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Experience</h4>
      <h2 className="text-center text-5xl font-Ovo relative inline-block ">
        Work Experience
        <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-16 h-[2px] red-underline"></span>
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I have worked at:
      </p>

      <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="exp-card opacity-0 min-w-0 border border-black/10 dark:border-white/15
                       p-8 rounded-2xl cursor-pointer bg-white/70 dark:bg-white/[0.02]
                       hover:bg-[var(--color-light-hover)]/15 dark:hover:bg-white/[0.08]
                       hover:scale-105 shadow-sm transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-light-hover)]/20 dark:bg-white/10 mb-4">
              <Image src={icon} alt={title} className="w-7" />
            </div>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3 font-Ovo">
              {title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-5 mb-6">
              {description}
            </p>

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
