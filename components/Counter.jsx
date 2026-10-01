"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => (node.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
