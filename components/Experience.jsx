import React from "react";
import Image from "next/image";
import { serviceData, assets } from "@/assets/assets";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen px-[12%] py-20 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Experience</h4>
      <h2 className="text-center text-5xl font-Ovo">Work Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I have worked at:
      </p>

      <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group min-w-0 border border-black/10 dark:border-white/15
                       p-8 rounded-2xl cursor-pointer transition-all duration-300
                       bg-white/70 dark:bg-white/[0.02] hover:bg-[var(--color-light-hover)]/15
                       dark:hover:bg-white/[0.08] hover:scale-105 shadow-sm"
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

      {/* Divider line at the bottom for visual separation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-white/10"></div>
    </section>
  );
};

export default Experience;
