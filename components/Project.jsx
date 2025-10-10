"use client";

import React, { useEffect, useRef, useState } from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Project = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  // Intersection animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add(
                  i % 2 === 0 ? "animate-card-left" : "animate-card-right"
                );
              }, i * 200);
            });
          } else {
            cards.forEach((card) => {
              card.classList.remove("animate-card-left", "animate-card-right");
              card.style.opacity = 0;
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Change image in modal
  const nextImg = () => {
    if (!selectedProject?.images) return;
    setCurrentImg((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImg = () => {
    if (!selectedProject?.images) return;
    setCurrentImg((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // Reset current image when opening a new modal
  useEffect(() => {
    setCurrentImg(0);
  }, [selectedProject]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full min-h-screen px-[12%] py-20 flex flex-col justify-center scroll-mt-20 relative overflow-hidden"
    >
      <div>
        <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
        <h2 className="text-center text-5xl font-Ovo red-underline">
          What I do in my free time
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Here are some of my personal projects:
        </p>

        {/* Grid */}
        <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
          {workData.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="project-card opacity-0 relative h-72 sm:h-80 bg-no-repeat bg-cover bg-center rounded-2xl 
                       overflow-hidden group transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Info */}
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 
                         w-10/12 bg-white/80 dark:bg-white/[0.05]
                         backdrop-blur-md border border-black/10 dark:border-white/10
                         rounded-xl py-4 px-6 flex items-center justify-between
                         transition-all duration-500 group-hover:bottom-8 group-hover:scale-[1.03]"
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
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white rounded-2xl p-8 w-[90%] sm:w-[70%] lg:w-[50%] max-h-[80vh] overflow-y-auto shadow-2xl relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
            ></button>
            <h2 className="text-3xl font-Ovo mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {selectedProject.description ||
                "No description provided for this project yet."}
            </p>
            {/* VIDEO */}
            {selectedProject.video ? (
              <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
                <video
                  src={selectedProject.video}
                  type="video/mp4"
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : selectedProject.images ? (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                {/* Image */}
                <Image
                  src={selectedProject.images[currentImg]}
                  alt={`${selectedProject.title} screenshot`}
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Arrows */}
                <button
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  ‹
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImg
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video bg-gray-100 dark:bg-white/10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                No media yet.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
