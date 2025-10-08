import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3 pb-10">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt="logo"
          className="w-50 mx-auto mb-0 dark:invert"
        />
      </div>

      <hr className="border-gray-300 mx-[12%] mb-0" />
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm px-[12%]">
        <p className="mb-4 sm:mb-0">
          © 2025 Skander Ben Mekki. All rights reserved.
        </p>

        <ul className="flex items-center gap-8">
          <li>
            <a
              href="https://github.com/skanderbm123"
              target="_blank"
              className="hover:underline hover:text-black/80"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/skander-ben-mekki/"
              target="_blank"
              className="hover:underline hover:text-black/80"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
