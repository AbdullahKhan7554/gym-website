"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/data";
import { easeIron } from "@/lib/motion";

function FaqItem({ q, a, open, onToggle, id }) {
  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          id={`faq-trigger-${id}`}
          className="flex w-full items-center justify-between gap-4 py-6 text-left"
        >
          <span className="text-base font-medium text-ink-primary sm:text-lg">
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: easeIron }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
              open
                ? "border-accent bg-accent text-iron-black"
                : "border-white/15 text-ink-secondary"
            }`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeIron }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, Answered"
            description="Everything you need to know before you walk through the doors. Still curious? Reach out — we love to talk training."
          />
        </div>

        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              id={i}
              {...item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
