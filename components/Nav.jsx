"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile } from "@/lib/data";
import { asset } from "@/lib/asset";

function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-text"
    >
      {/* sun shows in dark mode, moon in light mode */}
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="light:hidden">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hidden light:block">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    // Clear the highlight when back in the hero.
    const hero = document.getElementById("top");
    const heroIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(""), {
      rootMargin: "-45% 0px -50% 0px",
    });
    if (hero) heroIo.observe(hero);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      heroIo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border-line bg-bg/75 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium" aria-label="Back to top">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-xs font-bold text-accent-ink">
            SB
          </span>
          <span className="hidden sm:inline">skander.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === n.id ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={asset(profile.resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-text px-4 py-1.5 text-sm font-medium text-bg transition hover:opacity-85 sm:inline-block"
          >
            Resume
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-bg/90 p-3 backdrop-blur-xl md:hidden"
          >
            <ul>
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-lg text-muted hover:bg-surface-2 hover:text-text"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={asset(profile.resume)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center font-medium text-accent-ink"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
