"use client";

import { MotionConfig } from "framer-motion";

// Honors the visitor's reduced-motion setting across every animation.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
