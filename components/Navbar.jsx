import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sideMenurRef = useRef(); // Mobile menu open/close
  const openMenu = () => {
    if (sideMenurRef.current)
      sideMenurRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    if (sideMenurRef.current)
      sideMenurRef.current.style.transform = "translateX(16rem)";
  };

  // Scroll shadow/background
  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme: initialize from localStorage or prefers-color-scheme
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const startDark = stored ? stored === "dark" : prefersDark;
    setIsDark(startDark);
    if (startDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <nav
        className={`${
          isScroll
            ? "bg-white/60 dark:bg-[var(--color-dark-theme)]/60 backdrop-blur-lg shadow-sm"
            : ""
        } w-full fixed top-0 left-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
           bg-white/80 dark:bg-[var(--color-dark-theme)]/80 backdrop-blur-sm transition-colors`}
      >
        <a href="#top" className="shrink-0">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-32 sm:w-36 lg:w-40 xl:w-44 cursor-pointer mr-10 dark:invert"
          />
        </a>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 border rounded-full px-12 py-3
                     bg-yellow-200/50 dark:bg-white/5 border-black/10 dark:border-white/15"
        >
          <li>
            <a className="font-outfit hover:opacity-80" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-outfit hover:opacity-80" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-outfit hover:opacity-80" href="#experience">
              My Experience
            </a>
          </li>
          <li>
            <a className="font-outfit hover:opacity-80" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-outfit hover:opacity-80" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-12">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 border border-black/10 dark:border-white/15 hover:bg-black/[.06] dark:hover:bg-white/10 transition"
          >
            <Image
              src={
                isDark ? assets.sun_icon ?? assets.moon_icon : assets.moon_icon
              }
              alt={isDark ? "Switch to light" : "Switch to dark"}
              className={`w-6 cursor-pointer ${isDark ? "invert" : ""}`}
            />
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 bg-white text-black border font-medium px-5 py-2 rounded-full 
                       hover:scale-105 transition-transform font-Ovo
                       dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:invert" />
          </a>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer dark:invert"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenurRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
                     bg-rose-50 dark:bg-[var(--color-dark-theme)] transition duration-300"
        >
          <button
            className="absolute top-6 right-6"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Image
              src={assets.close_black}
              alt=""
              className="w-6 cursor-pointer dark:invert"
            />
          </button>

          <li>
            <a
              className="font-outfit hover:opacity-80"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-outfit hover:opacity-80"
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-outfit hover:opacity-80"
              onClick={closeMenu}
              href="#experience"
            >
              My Experience
            </a>
          </li>
          <li>
            <a
              className="font-outfit hover:opacity-80"
              onClick={closeMenu}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="font-outfit hover:opacity-80"
              onClick={closeMenu}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
