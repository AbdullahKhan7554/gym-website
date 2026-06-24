"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { FACILITIES } from "@/lib/data";
import { scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

function BentoCard({ title, desc, img, span }) {
  return (
    <motion.div variants={scaleIn} className={span}>
      <TiltCard max={6} className="group h-full">
        <article className="relative h-full min-h-[260px] overflow-hidden rounded-card border border-white/10 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-glow-md">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-iron-black/30 to-transparent" />
          <div
            className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-display text-xl uppercase tracking-wide text-ink-primary sm:text-2xl">
                {title}
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">{desc}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-ink-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-iron-black">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export default function Facilities() {
  return (
    <section id="facilities" className="relative bg-iron-surface py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Facilities Showcase"
          title="World-Class Spaces"
          description="Every square foot is engineered for performance — from the strength floor to the recovery lounge."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FACILITIES.map((item) => (
            <BentoCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
