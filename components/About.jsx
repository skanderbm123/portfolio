"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets, aboutData } from "@/assets/assets";

const About = () => {
  const sectionRef = useRef(null);
  const toolsRef = useRef(null);
  const [firstRowTops, setFirstRowTops] = useState([]);

  // Fade animation for About
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onEnter = () => {
      el.classList.remove("animate-fade-up");
      void el.offsetWidth;
      el.classList.add("animate-fade-up");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onEnter();
          else el.classList.remove("animate-fade-up");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Detect which items are in the first row
  useEffect(() => {
    const updateRows = () => {
      const ul = toolsRef.current;
      if (!ul) return;
      const children = Array.from(ul.children);
      if (!children.length) return;

      // Get the top position of the first item
      const topPos = children[0].getBoundingClientRect().top;
      const topRowIndexes = children
        .map((el, idx) => {
          const sameRow = Math.abs(el.getBoundingClientRect().top - topPos) < 5; // small tolerance
          return sameRow ? idx : null;
        })
        .filter((x) => x !== null);

      setFirstRowTops(topRowIndexes);
    };

    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="opacity-0 translate-y-6 transition-none
             w-full px-[10%] py-12 flex flex-col justify-center items-center
             scroll-mt-[96px] md:scroll-mt-[100px] min-h-screen"
    >
      <div className="max-w-6xl w-full flex flex-col justify-center items-center">
        <h4 className="text-center mb-2 text-lg font-Ovo">
          {aboutData.introTitle}
        </h4>
        <h2 className="text-center text-5xl font-Ovo red-underline">
          {aboutData.sectionTitle}
        </h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-12">
          <div className="w-64 sm:w-85 rounded-3xl overflow-hidden flex-shrink-0">
            <Image
              src={assets.user_image}
              alt="Skander Ben Mekki"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="mb-10 max-w-2xl font-Ovo text-center lg:text-justify text-gray-800 dark:text-gray-200 text-[1rem] leading-relaxed tracking-[0.015em] hyphens-auto">
              {aboutData.paragraph}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {aboutData.infoList.map(({ icon, title, description }) => (
                <li
                  key={title}
                  className="p-6 rounded-xl cursor-pointer transition-transform text-left gap-3
                             flex flex-col items-center border border-black/10 hover:scale-110
                             hover:bg-[var(--color-light-hover)]/15
                             dark:border-white/15 dark:bg-white/[0.02] dark:hover:bg-white/[0.08]"
                >
                  <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {description}
                  </p>
                </li>
              ))}
            </ul>

            <h4 className="my-3 text-gray-700 dark:text-gray-300 font-Ovo">
              {aboutData.toolsTitle}
            </h4>

            <ul
              ref={toolsRef}
              className="mt-4 flex items-center gap-3 sm:gap-5 flex-wrap justify-center lg:justify-start"
            >
              {aboutData.toolsData.map((tool, index) => {
                const isTopRow = firstRowTops.includes(index);

                return (
                  <li
                    key={tool.name}
                    className="group relative flex items-center justify-center w-12 sm:w-14 aspect-square
                               rounded-lg cursor-pointer p-2 transition-transform
                               border border-gray-400 bg-white/50 hover:scale-110 hover:bg-[var(--color-light-hover)]/30
                               dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/15"
                  >
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      width={28}
                      height={28}
                      className="sm:w-7"
                    />

                    <span
                      className={`absolute left-1/2 -translate-x-1/2 text-xs
                                  text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100
                                  transition-opacity whitespace-nowrap pointer-events-none
                                  ${
                                    isTopRow
                                      ? "bottom-full mb-2"
                                      : "top-full mt-2"
                                  }`}
                    >
                      {tool.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
