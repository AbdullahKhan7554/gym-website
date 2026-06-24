"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PLANS } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

function PlanCard({ name, price, period, tagline, features, featured }) {
  return (
    <motion.article
      variants={fadeRise}
      whileHover={{ y: featured ? -22 : -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col rounded-card border p-8 ${
        featured
          ? "glass border-accent/50 shadow-glow-md lg:-translate-y-4 lg:scale-[1.03] hover:shadow-glow-lg"
          : "border-white/10 bg-iron-surface hover:border-accent/30 hover:shadow-xl"
      }`}
    >
      {/* VIP spotlight — soft red light pooling at the top of the card */}
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px -z-10 rounded-card opacity-60"
          style={{
            background:
              "radial-gradient(400px circle at 50% 0%, rgba(57,255,20,0.2), transparent 60%)",
          }}
        />
      )}
      {featured && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-iron-black">
          <Star className="h-3.5 w-3.5" aria-hidden="true" />
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl uppercase tracking-wide text-ink-primary">
        {name}
      </h3>
      <p className="mt-1 text-sm text-ink-secondary">{tagline}</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-lg text-ink-secondary">PKR</span>
        <span className="font-display text-5xl tabular-nums text-ink-primary">{price}</span>
        <span className="mb-1 text-sm text-ink-tertiary">{period}</span>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                featured ? "text-accent" : "text-ink-secondary"
              }`}
              aria-hidden="true"
            />
            <span className="text-ink-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={featured ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Choose {name}
      </Button>
    </motion.article>
  );
}

export default function Membership() {
  return (
    <section id="plans" className="relative bg-iron-surface py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Choose Your Commitment"
          description="Transparent pricing, no hidden fees. Every plan starts with a free assessment so you begin with a clear plan."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid items-stretch gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-ink-tertiary">
          All memberships include locker &amp; shower access. Annual plans save up
          to 20%.
        </p>
      </div>
    </section>
  );
}
