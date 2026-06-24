"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

const POINTS = [
  "12 years building Lahore's strongest fitness community",
  "Coaches certified by NASM, ACE and the IWF",
  "Equipment imported and serviced to commercial standard",
  "A culture of discipline, respect and measurable results",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal variants={fadeRise} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80"
              alt="Athletes training on the strength floor at Iron Elite"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iron-black/70 to-transparent" />
          </div>
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-6 -right-2 glass rounded-2xl px-6 py-5 shadow-glow-sm sm:-right-6"
          >
            <p className="font-display text-4xl text-accent">3500+</p>
            <p className="mt-1 text-xs uppercase tracking-eyebrow text-ink-secondary">
              Members strong
            </p>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading
            eyebrow="About Iron Elite"
            title="More Than A Gym. A Standard."
            description="Iron Elite was built on a single belief — that world-class training should be accessible in the heart of Lahore. We pair elite equipment with coaches who treat your goals as their own."
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 space-y-4"
          >
            {POINTS.map((point) => (
              <motion.li
                key={point}
                variants={fadeRise}
                className="flex items-start gap-3 text-ink-secondary"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
