"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");
  const sectionRef = useRef(null);

  // Animate section on scroll
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = section.querySelectorAll(".contact-animate");
            items.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-contact-in");
              }, i * 200);
            });
          } else {
            section
              .querySelectorAll(".contact-animate")
              .forEach((el) => el.classList.remove("animate-contact-in"));
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "bb729fc3-b82b-4de5-ac26-bcb82f1203d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully 🎉");
      event.target.reset();
    } else {
      setResult("Something went wrong. Try again later.");
    }

    setTimeout(() => setResult(""), 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      <h4 className="contact-animate opacity-0 text-center mb-2 text-lg font-Ovo">
        Connect with me
      </h4>
      <h2 className="red-underline contact-animate opacity-0 text-center text-5xl font-Ovo">
        Get in touch
      </h2>
      <p className="contact-animate opacity-0 text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </p>

      <form
        className="contact-animate opacity-0 max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid [grid-template-columns:var(--cols-auto)] gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 p-3 outline-none border border-gray-300 rounded-md transition-all
                     focus:ring-2 focus:ring-[var(--color-light-hover)] focus:scale-[1.02]
                     bg-white/70 dark:bg-white/[0.08] dark:border-white/20 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 outline-none border border-gray-300 rounded-md transition-all
                     focus:ring-2 focus:ring-[var(--color-light-hover)] focus:scale-[1.02]
                     bg-white/70 dark:bg-white/[0.08] dark:border-white/20 dark:text-white"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-4 outline-none border border-gray-300 rounded-md mb-4 transition-all
                   focus:ring-2 focus:ring-[var(--color-light-hover)] focus:scale-[1.02]
                   bg-white/70 dark:bg-white/[0.08] dark:border-white/20 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="contact-animate opacity-0 py-3 px-8 w-max flex items-center justify-between gap-2
                    text-white rounded-full mx-auto hover:scale-110 duration-300
                   dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20
                   shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="send" className="w-5" />
        </button>

        <p className="text-center text-sm text-gray-500 mt-6 font-Ovo">
          {result}
        </p>
      </form>
    </section>
  );
};

export default Contact;
