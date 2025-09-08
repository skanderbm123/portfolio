import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenurRef = useRef();
  const openMenu = () => {
    sideMenurRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenurRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <nav
        className={`${isScroll ? "bg-white/60 backdrop-blur-lg shadow-sm" : ""} 
  w-full fixed top-0 left-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white/80 backdrop-blur-sm`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 border rounded-full px-12 py-3 bg-yellow-200/50 backdrop-blur-sm`}
        >
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
        <div className="flex items-center gap-12">
          <button>
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 bg-white text-black border font-medium px-5 py-2 rounded-full 
            hover:scale-105 transition-transform font-Ovo"
          >
            {" "}
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>
        {/* Mobile Menu - hidden for now */}
        <ul
          ref={sideMenurRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-50 z-50 h-screen bg-rose-50 transition duration-300"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-outfit" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#experience">
              My Experience
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-outfit" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
