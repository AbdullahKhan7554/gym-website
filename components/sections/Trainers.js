"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TRAINERS } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

function TrainerCard({ name, role, spec, img }) {
  return (
    <motion.article
      variants={fadeRise}
      className="group relative overflow-hidden rounded-card border border-white/10 bg-iron-surface2"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={img}
          alt={`${name}, ${role} at Iron Elite`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-iron-black/20 to-transparent" />
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/20 text-ink-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-accent group-hover:bg-accent group-hover:text-iron-black">
          <Instagram className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-flex translate-y-1 items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-accent opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-accent/20">
          {spec}
        </span>
        <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-ink-primary transition-transform duration-300 group-hover:-translate-y-0.5">
          {name}
        </h3>
        <p className="text-sm text-ink-secondary">{role}</p>
      </div>
    </motion.article>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Trainer Showcase"
          title="Coached By The Best"
          description="Our team blends international certification with real-world results. Train with people who live the standard they set."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
