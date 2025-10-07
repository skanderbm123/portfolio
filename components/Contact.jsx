import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb729fc3-b82b-4de5-ac26-bcb82f1203d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setResult("");
    }, 4000);
  };

  return (
    <div
      className='w-full px-[12%] py-10 scroll-mt-20
             bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
             dark:bg-none dark:bg-[var(--color-dark-theme)]'
      id="contact"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid [grid-template-columns:var(--cols-auto)] gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-300 rounded-md mb-4
             focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-white dark:bg-transparent dark:border-white/20 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-300 rounded-md mb-4
             focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-white dark:bg-transparent dark:border-white/20 dark:text-white"
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:border-white/20 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2
             bg-black/80 text-white rounded-full 
             mx-auto hover:scale-105 duration-300
             shadow-[4px_4px_0_#000] hover:bg-black"
        >
          Send Message{" "}
          <Image src={assets.right_arrow_white} alt="send" className="w-5" />
        </button>

        <p className="text-center text-sm text-gray-500 mt-4 font-Ovo">
          {result ? "I'll get back to you as soon as possible!" : ""}
        </p>
      </form>
    </div>
  );
};

export default Contact;
