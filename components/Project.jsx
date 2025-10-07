import React from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div className="w-full px-[12%] py-10 scroll-mt-20" id="projects">
        <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
        <h2 className="text-center text-5xl font-Ovo">
          What I do in my free time
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Here are some of my personal projects:
        </p>
      </div>

      <div className="grid grid-cols-auto my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="h-72 sm:h-80 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 
              left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
              justify-between duration-500 group-hover:bottom-8"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 ">
                <Image src={assets.send_icon} alt="send" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
