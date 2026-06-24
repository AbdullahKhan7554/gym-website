"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

const VARIANTS = {
  primary:
    "bg-accent text-iron-black hover:shadow-glow-lg shadow-glow-cta",
  ghost:
    "bg-transparent text-ink-primary border border-white/20 hover:border-accent",
};

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-shadow duration-300 ${VARIANTS[variant]} ${className}`;

  const inner = (
    <motion.span
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.span
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="inline-block"
      >
        <Link href={href} className={classes} {...props}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={classes}
      {...props}
    >
      {inner}
    </motion.button>
  );
}
