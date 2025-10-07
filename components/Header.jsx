import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col justify-center items-center gap-4 -mt-10"
      id="top"
    >
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="w-32 rounded-full mx-auto"
        />
      </div>

      {/* FIXED: font-Ovo */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Skander Ben Mekki{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        A Passionate Full-Stack Developer
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I create modern and responsive web applications with a focus on
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <a
          href="#contact"
          className="px-10 py-3 border bg-black text-white rounded-full flex items-center gap-2
                     border-black hover:bg-black/90
                     dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="profile" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full flex items-center gap-2
                     border-black text-black hover:bg-black/[0.05]
                     dark:border-white/25 dark:text-white dark:hover:bg-white/10"
        >
          My Resume
          <Image src={assets.download_icon} alt="profile" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
