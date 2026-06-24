"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useFinePointer } from "@/lib/useReducedMotion";

// 3D tilt + cursor-tracked light. Transform-only (GPU). Falls back to a static
// card on touch / reduced-motion. `max` = max tilt in degrees.
export default function TiltCard({ children, className = "", max = 8 }) {
  const fine = useFinePointer();
  const ref = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(py, [0, 1], [max, -max]),
    { stiffness: 220, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-max, max]),
    { stiffness: 220, damping: 20 }
  );

  // Light position follows the pointer. Computed unconditionally (before any
  // early return) so hook order stays stable across the fine-pointer flip.
  const lightX = useTransform(px, (v) => `${v * 100}%`);
  const lightY = useTransform(py, (v) => `${v * 100}%`);
  const lightBg = useTransform(
    [lightX, lightY],
    ([lx, ly]) =>
      `radial-gradient(220px circle at ${lx} ${ly}, rgba(57,255,20,0.2), transparent 60%)`
  );

  const handleMove = (e) => {
    if (!fine) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (!fine) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative ${className}`}
    >
      {/* Cursor-tracked hover light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 [.group:hover_&]:opacity-100"
        style={{ background: lightBg }}
      />
      {children}
    </motion.div>
  );
}
