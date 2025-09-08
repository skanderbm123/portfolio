import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
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
            {infoList.map(({ icon, iconDark, title, description, index }) => (
              <li
                key={index}
                className="border-[0.5px] border-black/10 p-6 rounded-xl cursor-pointer hover:bg-light-hover hover:scale-110 transition-transform text-left gap-3 flex flex-col items-center hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-10 mb-2" />
                <h3>{title}</h3>
                <p className="text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
          <ul className="mt-4 flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:scale-110 transition-transform bg-white/50 hover:bg-light-hover p-2"
                key={index}
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
