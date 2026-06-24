"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import { easePower } from "@/lib/motion";

// Drop your hero loop into /public/videos/hero.mp4 and set this to
// "/videos/hero.mp4" to enable the looping video. Until then the cinematic
// poster image renders with the reveal sequence (zero network errors).
const HERO_VIDEO = null;

const HERO_POSTER = "/images/intro.png";

const HEADLINE_1 = ["Lahore's", "Elite"];
const HEADLINE_2 = ["Fitness", "Destination"];

const HERO_STATS = [
  { value: 3500, suffix: "+", label: "Members" },
  { value: 28, suffix: "", label: "Coaches" },
  { value: 12, suffix: "+", label: "Years" },
];

const wordVariant = {
  hidden: { opacity: 0, y: "100%" },
  show: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: easePower, delay: 0.4 + i * 0.09 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePower, delay: i },
  }),
};

function Word({ word, index, accent }) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden align-bottom">
      <motion.span
        custom={index}
        variants={wordVariant}
        className={`inline-block ${accent ? "text-accent" : ""}`}
        style={accent ? { textShadow: "0 0 40px rgba(57,255,20,0.4)" } : undefined}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);

  // Parallax layers tied to scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background media — optimized image with cinematic reveal + slow zoom */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <motion.div
          initial={{ clipPath: "inset(12% 12% 12% 12%)", scale: 1.18 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1.06 }}
          transition={{
            clipPath: { duration: 1.4, ease: easePower, delay: 0.1 },
            scale: { duration: 14, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          {HERO_VIDEO ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={HERO_POSTER}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={HERO_POSTER}
              alt="Athlete training on the strength floor at Iron Elite"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-iron-black via-iron-black/85 to-iron-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-iron-black via-transparent to-iron-black/60" />
        {/* Static ambient glow (cheap — no per-frame repaint) */}
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px] animate-pulse-glow" />
      </motion.div>

      <motion.div className="container-px w-full" style={{ y: contentY, opacity: fade }}>
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
        >
          <motion.span
            custom={0.2}
            variants={fadeUp}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Train Hard. Live Strong.
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6.5rem)] uppercase leading-[0.95] tracking-tight text-ink-primary">
            <span className="block">
              {HEADLINE_1.map((w, i) => (
                <Word key={w} word={w} index={i} />
              ))}
            </span>
            <span className="block">
              {HEADLINE_2.map((w, i) => (
                <Word key={w} word={w} index={i + HEADLINE_1.length} accent />
              ))}
            </span>
          </h1>

          <motion.p
            custom={1.1}
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg"
          >
            Transform your body, improve your health, and train with professional
            coaches using world-class fitness equipment.
          </motion.p>

          <motion.div
            custom={1.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#contact" variant="primary">
              Join Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Book Free Consultation
            </MagneticButton>
          </motion.div>

          {/* Hero stats */}
          <motion.dl
            custom={1.5}
            variants={fadeUp}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl text-ink-primary sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1 text-xs uppercase tracking-eyebrow text-ink-tertiary">
                  {stat.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-eyebrow text-ink-tertiary">
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden bg-iron-line">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
