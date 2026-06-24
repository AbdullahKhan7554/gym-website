"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Accessible animated count-up. Renders the final value to AT instantly via
// aria-label; honours reduced motion.
export default function Counter({ value, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
