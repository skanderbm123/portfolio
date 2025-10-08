"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 50;
      if (shouldScroll !== isScrolled) setIsScrolled(shouldScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Theme toggle
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const startDark = stored ? stored === "dark" : prefersDark;
    setIsDark(startDark);
    document.documentElement.classList.toggle("dark", startDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
                  px-5 lg:px-8 xl:px-[8%] py-4 transition-all duration-500
                  ${
                    isScrolled
                      ? "bg-white/60 dark:bg-[var(--color-dark-theme)]/60 backdrop-blur-md shadow-sm"
                      : "bg-white/80 dark:bg-[var(--color-dark-theme)]/80 backdrop-blur-sm"
                  }`}
    >
      {/* Logo */}
      <a href="#top">
        <Image
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-36 lg:w-40 xl:w-44 cursor-pointer mr-10 dark:invert transition-transform duration-300 hover:scale-105"
        />
      </a>

      {/* Links */}
      <ul
        className="hidden md:flex items-center gap-6 lg:gap-8 border rounded-full px-12 py-3
             bg-white/85 dark:bg-[#111]/70 backdrop-blur-xl
             border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]
             transition-all duration-300"
      >
        {["Home", "About me", "Experience", "Projects", "Contact"].map(
          (label, i) => (
            <li key={label}>
              <a
                href={
                  ["#top", "#about", "#experience", "#projects", "#contact"][i]
                }
                className="font-outfit hover:text-[var(--color-light-hover)] transition-colors"
              >
                {label}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-6 lg:gap-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full p-2 border border-black/10 dark:border-white/15 hover:bg-black/[.06] dark:hover:bg-white/10 transition-all duration-300"
        >
          <Image
            src={isDark ? assets.sun_icon : assets.moon_icon}
            alt="theme toggle"
            className={`w-6 transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-3 
             bg-[#d63b44] text-white border border-[#b82f38] 
             font-medium px-5 py-2 rounded-full 
             hover:bg-[#b82f38] hover:shadow-[0_4px_14px_rgba(214,59,68,0.35)]
             transition-transform hover:scale-105 font-Ovo"
        >
          Contact
          <Image src={assets.arrow_icon} alt="" className="w-3 invert" />
        </a>

        <button onClick={() => setIsMenuOpen(true)} className="block md:hidden">
          <Image
            src={assets.menu_black}
            alt="menu"
            className="w-6 dark:invert"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 z-50 
              bg-white/95 dark:bg-[#111]/90 backdrop-blur-2xl
              border-l border-black/10 dark:border-white/10 shadow-2xl
              transform transition-transform duration-500 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={assets.close_black}
            alt="close"
            className="w-6 dark:invert"
          />
        </button>

        <ul className="flex flex-col gap-6 py-20 px-10">
          {["Home", "About", "Experience", "Projects", "Contact"].map(
            (label, i) => (
              <li key={label}>
                <a
                  href={
                    ["#top", "#about", "#experience", "#projects", "#contact"][
                      i
                    ]
                  }
                  onClick={() => setIsMenuOpen(false)}
                  className="font-outfit text-lg hover:text-[var(--color-light-hover)] transition-colors"
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
