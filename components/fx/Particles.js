"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion, useFinePointer } from "@/lib/useReducedMotion";

// Lightweight floating embers. Pure transform/opacity, generated client-side
// after mount (no hydration mismatch). Disabled on touch + reduced motion.
export default function Particles({ count = 12 }) {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (reduced || !fine) return;
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 14 + Math.random() * 16,
      delay: Math.random() * -30,
      drift: (Math.random() - 0.5) * 60,
      opacity: 0.15 + Math.random() * 0.3,
    }));
    setItems(arr);
  }, [count, reduced, fine]);

  if (reduced || !fine || items.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            bottom: -10,
            willChange: "transform, opacity",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -window.innerHeight - 40],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
