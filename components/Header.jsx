"use client";

import React from "react";
import { motion } from "framer-motion";
import { assets, headerData } from "@/assets/assets";
import Image from "next/image";
const basePath =
  process.env.NODE_ENV === "production" ? "/Skander-Ben-Mekki-Portfolio" : "";

const Header = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col justify-center items-center gap-4 -mt-10"
    >
      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          className="w-32 rounded-full mx-auto"
        />
      </motion.div>

      {/* Intro */}
      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {headerData.intro}{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo red-underline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {headerData.title}
      </motion.h1>

      {/* Social Icons */}
      <motion.div
        className="flex items-center gap-5 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href={headerData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={assets.github_icon}
            alt="GitHub"
            className="w-7 h-7 dark:invert"
          />
        </a>
        <a
          href={headerData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={assets.linkedin_icon}
            alt="LinkedIn"
            className="w-7 h-7 dark:invert"
          />
        </a>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {headerData.subtitle}
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <a
          href="#contact"
          className="red-btn px-10 py-3 rounded-full flex items-center gap-2"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href={`${basePath}/Skander-Ben-Mekki-Portfolio-Website.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-10 py-3 border rounded-full flex items-center gap-2
             border-black text-black hover:bg-black/[0.05]
             dark:border-white/25 dark:text-white dark:hover:bg-white/10
             transition-all duration-300 hover:scale-105"
        >
          My Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
