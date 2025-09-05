import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm z-50 relative">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src={assets.header_bg_color}
            alt="background"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-yellow-200/50 backdrop-blur-sm">
          <li>
            <a className="font-outfit" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#experience">
              My Experience
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-outfit" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 bg-black text-white font-medium px-5 py-2 rounded-full 
            hover:scale-105 transition-transform font-Ovo"
          >
            {" "}
            Contact <Image src={assets.arrow_icon} className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
