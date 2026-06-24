"use client";

import { motion } from "framer-motion";
import { fadeRise, viewportOnce } from "@/lib/motion";

// Scroll-triggered entrance wrapper. Accepts optional variants + delay.
export default function Reveal({
  children,
  className = "",
  variants = fadeRise,
  delay = 0,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
