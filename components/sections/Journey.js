"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { JOURNEY } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

function Step({ step, icon: Icon, title, desc }) {
  return (
    <motion.div variants={fadeRise} className="relative flex gap-5 pb-12 sm:gap-7">
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-iron-surface text-accent shadow-glow-sm"
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </div>
      <div>
        <span className="font-display text-sm text-accent">{step}</span>
        <h3 className="mt-1 text-xl font-semibold text-ink-primary sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-secondary sm:text-base">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.4,
  });

  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="container-px grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Transformation Journey"
            title="Five Steps To A Stronger You"
            description="No guesswork. A structured, coach-led path from your first assessment to a transformation that lasts."
          />
        </div>

        <div ref={railRef} className="relative">
          {/* Animated SVG progress rail (sits under the icon column, x = 28px) */}
          <svg
            className="absolute left-[27px] top-7 h-[calc(100%-3.5rem)] w-1 -translate-x-1/2"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="#39ff14"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength, filter: "drop-shadow(0 0 6px rgba(57,255,20,0.7))" }}
            />
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {JOURNEY.map((item) => (
              <Step key={item.step} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
