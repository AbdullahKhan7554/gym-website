"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/useReducedMotion";

const PHONE = "923286992467"; // 0328-6992467 → international
const MESSAGE =
  "Hello Iron Elite Fitness Club,\nI would like to know more about memberships and training programs.";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const TOOLTIP = "Chat With Our Fitness Experts";
const PARTICLES = [0, 60, 120, 180, 240, 300]; // angles for orbiting embers

export default function WhatsAppButton() {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const rippleId = useRef(0);
  const linkRef = useRef(null);

  // Magnetic pull (desktop only).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 15 });
  const sy = useSpring(my, { stiffness: 200, damping: 15 });

  // Emerge from the neon glow once the intro is done (with a safety fallback).
  useEffect(() => {
    const reveal = () => setVisible(true);
    window.addEventListener("intro:done", reveal, { once: true });
    const fallback = setTimeout(reveal, 6000);
    return () => {
      window.removeEventListener("intro:done", reveal);
      clearTimeout(fallback);
    };
  }, []);

  const handleMove = (e) => {
    if (!fine) return;
    const rect = linkRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * 0.35);
    my.set(relY * 0.35);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const handleClick = () => {
    if (reduced) return;
    const id = rippleId.current++;
    setRipples((r) => [...r, id]);
    setTimeout(() => setRipples((r) => r.filter((x) => x !== id)), 650);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {visible && (
          <motion.div
            // EMERGE: scale up out of the glow
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="relative"
          >
            {/* One-shot energy burst on emerge */}
            {!reduced && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent"
                initial={{ scale: 0.4, opacity: 0.7 }}
                animate={{ scale: 2.6, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            )}

            {/* Gentle idle floating wrapper */}
            <motion.div
              animate={reduced ? {} : { y: [0, -6, 0] }}
              transition={
                reduced
                  ? {}
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative"
            >
              {/* Breathing glow */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-accent blur-xl"
                animate={
                  reduced
                    ? { opacity: 0.35 }
                    : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.18, 1] }
                }
                transition={
                  reduced
                    ? {}
                    : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                }
              />

              {/* Rotating neon ring (animated SVG stroke) */}
              {!reduced && (
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  className="absolute -inset-1.5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#39ff14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="44 250"
                    opacity="0.9"
                  />
                </motion.svg>
              )}

              {/* Orbiting particles */}
              {!reduced &&
                PARTICLES.map((angle, i) => (
                  <motion.span
                    key={angle}
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-accent"
                    style={{
                      transformOrigin: "center",
                      rotate: `${angle}deg`,
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{
                      translateY: [-26, -32, -26],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  />
                ))}

              {/* Tooltip */}
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 12, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 12, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="glass pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-primary shadow-glow-sm"
                  >
                    {TOOLTIP}
                    <span className="glass absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-l-0 border-t-0" />
                  </motion.span>
                )}
              </AnimatePresence>

              {/* The button */}
              <motion.a
                ref={linkRef}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with our fitness experts on WhatsApp"
                onMouseMove={handleMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={reset}
                onClick={handleClick}
                style={{ x: sx, y: sy, willChange: "transform" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 text-accent shadow-glow-cta sm:h-16 sm:w-16"
              >
                {/* Hover glow boost */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-accent blur-lg"
                  animate={{ opacity: hovered ? 0.7 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Click ripples */}
                {ripples.map((id) => (
                  <motion.span
                    key={id}
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-accent"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ))}

                <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 drop-shadow-[0_0_6px_rgba(57,255,20,0.6)]" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
