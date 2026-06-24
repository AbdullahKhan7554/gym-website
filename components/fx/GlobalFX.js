"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ScrollProgress from "./ScrollProgress";
import NoiseOverlay from "./NoiseOverlay";

// Pointer-driven FX are heavy and continuous. Load them lazily AND only mount
// them once the intro is done — this keeps the main thread free during entry so
// the intro animation stays smooth, then layers the polish in afterwards.
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function GlobalFX() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Mount heavy FX only after the intro finishes, so the entrance stays smooth.
    // Safety cap covers any case where the cue is missed.
    const onDone = () => setReady(true);
    window.addEventListener("intro:done", onDone, { once: true });
    const fallback = setTimeout(() => setReady(true), 7000);
    return () => {
      window.removeEventListener("intro:done", onDone);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <NoiseOverlay />
      {ready && (
        <>
          <Particles count={7} />
          <CustomCursor />
        </>
      )}
    </>
  );
}
