import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
