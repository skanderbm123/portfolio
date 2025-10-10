"use client";

import React, { useEffect, useRef, useState } from "react";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";

const Project = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate cards on scroll
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

  // Navigation inside modal
  const nextSlide = () => {
    if (!selectedProject?.media?.length) return;
    setCurrentIndex((prev) =>
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!selectedProject?.media?.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  // Reset current slide when opening a project
  useEffect(() => {
    setCurrentIndex(0);
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

        {/* GRID */}
        <div className="grid [grid-template-columns:var(--cols-auto)] gap-8 my-10">
          {workData.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="project-card opacity-0 relative h-72 sm:h-80 bg-no-repeat bg-cover bg-center rounded-2xl 
                 overflow-hidden group transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Info Box */}
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 
             bg-gradient-to-r from-white/90 via-white/80 to-white/90 
             dark:from-black/70 dark:via-black/60 dark:to-black/70
             backdrop-blur-md border border-black/10 dark:border-white/10
             rounded-xl py-4 px-6 flex items-center justify-between
             transition-all duration-500 group-hover:bottom-8 group-hover:scale-[1.03]"
              >
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                    {project.title}
                  </h2>
                  {project.cardInfo && (
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                      {project.cardInfo}
                    </p>
                  )}
                </div>

                <div
                  className="border border-black/40 dark:border-white/50 w-9 aspect-square flex items-center justify-center 
               rounded-full shadow-[2px_2px_0_#0002] dark:shadow-[2px_2px_0_#fff2]
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
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
            >
              ✕
            </button>

            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{selectedProject.title}</h2>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-5 sm:h-5"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.808 1.304 3.495.997.107-.775.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.465-2.382 1.235-3.222-.125-.303-.54-1.524.115-3.176 0 0 1.01-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 3.3-1.23 3.3-1.23.655 1.652.24 2.873.12 3.176.77.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.63-5.475 5.922.43.372.81 1.105.81 2.227 0 1.608-.015 2.902-.015 3.293 0 .317.21.693.825.574C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Description */}
            {Array.isArray(selectedProject.description) ? (
              <>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  {selectedProject.description[0]}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                  {selectedProject.description.slice(1).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description ||
                  "No description provided for this project yet."}
              </p>
            )}

            {/* ---- MEDIA CAROUSEL ---- */}
            {selectedProject.media && selectedProject.media.length > 0 && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                {/* Current Slide */}
                {selectedProject.media[currentIndex].type === "image" ? (
                  <Image
                    src={selectedProject.media[currentIndex].src}
                    alt={`${selectedProject.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                    onClick={() => {
                      if (window.innerWidth < 768)
                        window.open(
                          selectedProject.media[currentIndex].src,
                          "_blank"
                        );
                    }}
                  />
                ) : (
                  <video
                    src={selectedProject.media[currentIndex].src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Caption */}
                {selectedProject.media[currentIndex].caption && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-medium text-white bg-black/60 px-3 py-1 rounded-md shadow-md">
                    {selectedProject.media[currentIndex].caption}
                  </div>
                )}

                {/* Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.media.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
