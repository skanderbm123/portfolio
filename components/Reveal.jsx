"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 30, rotate = 0, className, as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ type: "spring", stiffness: 140, damping: 18, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
