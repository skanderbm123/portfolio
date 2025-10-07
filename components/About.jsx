import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 mt-14" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm Skander Ben Mekki, a passionate Full-Stack Developer with a
            knack for creating dynamic and responsive web applications. With a
            strong foundation in both front-end and back-end technologies, I
            thrive on turning complex problems into elegant solutions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }) => (
              <li
                key={title}
                className="p-6 rounded-xl cursor-pointer transition-transform text-left gap-3
                           flex flex-col items-center
                           border border-black/10 hover:scale-110
                           hover:bg-[var(--color-light-hover)]/15
                           dark:border-white/15 dark:bg-white/[0.02] dark:hover:bg-white/[0.08]"
              >
                <Image src={icon} alt={title} className="w-10 mb-2" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-gray-300 font-Ovo">
            Tools I use
          </h4>
          <ul className="mt-4 flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool) => (
              <li
                key={typeof tool === "string" ? tool : tool.src}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square
                           rounded-lg cursor-pointer p-2 transition-transform
                           border border-gray-400 bg-white/50 hover:scale-110 hover:bg-[var(--color-light-hover)]/30
                           dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/15"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
