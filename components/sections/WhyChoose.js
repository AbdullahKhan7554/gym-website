"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { FEATURES } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div variants={fadeRise}>
      <TiltCard className="group h-full">
        <article className="card-base relative h-full overflow-hidden p-7 transition-colors duration-300 group-hover:border-accent/40">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-iron-surface2 text-accent transition-colors group-hover:border-accent/50"
            style={{ transform: "translateZ(40px)" }}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3
            className="mt-5 text-lg font-semibold text-ink-primary"
            style={{ transform: "translateZ(28px)" }}
          >
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            {desc}
          </p>
          <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
        </article>
      </TiltCard>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section id="why" className="relative bg-iron-surface py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Iron Elite"
          title="Built For People Who Are Serious"
          description="Everything under one roof, engineered to remove every excuse between you and the strongest version of yourself."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
