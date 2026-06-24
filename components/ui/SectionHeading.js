"use client";

import { motion } from "framer-motion";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span variants={fadeRise} className="eyebrow">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeRise}
        className="font-display text-4xl uppercase leading-[1.02] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeRise}
          className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
