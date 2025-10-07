import React from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen px-[12%] py-20 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
      <h2 className="text-center text-5xl font-Ovo">
        What I do in my free time
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here are some of my personal projects:
      </p>

      {/* Project cards grid */}
      <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative h-72 sm:h-80 bg-no-repeat bg-cover bg-center rounded-2xl 
                       overflow-hidden group transition-all duration-500 
                       shadow-md hover:shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Info card */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 
                         w-10/12 bg-white/80 dark:bg-white/[0.05]
                         backdrop-blur-md border border-black/10 dark:border-white/10
                         rounded-xl py-4 px-6 flex items-center justify-between
                         transition-all duration-500 group-hover:bottom-8"
            >
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div
                className="border border-black dark:border-white w-9 aspect-square flex items-center justify-center 
                           rounded-full shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]
                           transition-all duration-300 group-hover:bg-[var(--color-light-hover)]"
              >
                <Image
                  src={assets.send_icon}
                  alt="send"
                  className="w-5 invert-[.0] dark:invert transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-white/10"></div>
    </section>
  );
};

export default Project;
