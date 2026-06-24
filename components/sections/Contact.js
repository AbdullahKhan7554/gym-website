"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingField from "@/components/ui/FloatingField";
import { CONTACT } from "@/lib/data";
import { fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

const DETAILS = [
  { icon: MapPin, label: "Visit", value: CONTACT.address },
  { icon: Phone, label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-iron-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[90px]" />

      <div className="container-px grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — info */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start Your Transformation"
            description="Book a free consultation or drop by the club. Our team will tour you through the floor and build your first plan — no commitment required."
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 space-y-5"
          >
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <motion.li
                key={label}
                variants={fadeRise}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-iron-surface2 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-eyebrow text-ink-tertiary">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-ink-primary transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink-primary">{value}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — form */}
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass rounded-card p-6 shadow-glow-sm sm:p-8"
        >
          {sent ? (
            <div className="flex h-full min-h-[440px] flex-col items-center justify-center text-center">
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-iron-black shadow-glow-md"
              >
                <Check className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 font-display text-2xl uppercase text-ink-primary"
              >
                Request Received
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 max-w-sm text-sm text-ink-secondary"
                role="status"
              >
                Thank you. A coach will call you within 24 hours to schedule your
                free consultation.
              </motion.p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingField
                  id="name"
                  label="Full Name"
                  required
                  autoComplete="name"
                />
                <FloatingField
                  id="phone"
                  label="Phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />
              </div>

              <FloatingField
                id="email"
                label="Email"
                type="email"
                required
                autoComplete="email"
              />

              <div className="relative">
                <select
                  id="goal"
                  name="goal"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-6 text-sm text-ink-primary transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  <option value="" disabled>
                    &nbsp;
                  </option>
                  <option>Build muscle &amp; strength</option>
                  <option>Lose fat &amp; get lean</option>
                  <option>Improve fitness &amp; conditioning</option>
                  <option>Personal training</option>
                </select>
                <label
                  htmlFor="goal"
                  className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-eyebrow text-accent"
                >
                  Your Goal
                </label>
              </div>

              <FloatingField
                id="message"
                label="Message (optional)"
                textarea
                rows={3}
              />

              <button
                type="submit"
                className="press inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-iron-black shadow-glow-cta transition-all duration-300 hover:bg-accent-hot hover:shadow-glow-lg"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
