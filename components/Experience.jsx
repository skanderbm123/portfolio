import React from "react";
import Image from "next/image";
import { serviceData, assets } from "@/assets/assets";

const Experience = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="experience">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Experience</h4>
      <h2 className="text-center text-5xl font-Ovo">Work Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I have worked at:
      </p>
      <div className="grid [grid-template-columns:var(--cols-auto)] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="min-w-0 border-[0.5px] border-black/10 p-6 rounded-xl cursor-pointer 
            hover:bg-light-hover hover:scale-105 transition-transform text-left gap-3 flex flex-col items-start hover:shadow-black duration-300"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 font-Ovo">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a
              href={link}
              className="flex items-center mt-5 gap-2 text-sm text-blue-600 font-Ovo"
            >
              Visit Website{" "}
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
