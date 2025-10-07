"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}
