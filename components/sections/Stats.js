"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Stats() {
  return (
    <section
      aria-label="Iron Elite by the numbers"
      className="relative overflow-hidden border-y border-white/10 bg-iron-black py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-px grid grid-cols-2 gap-y-12 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeRise}
            className="text-center"
          >
            <p className="font-display text-5xl text-ink-primary sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-eyebrow text-ink-secondary sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
