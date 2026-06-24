"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, SkipForward } from "lucide-react";
import { easeIron, easePower } from "@/lib/motion";

// ── Configuration ──────────────────────────────────────────────────────────
// The intro animates the AI-generated brand image (INTRO_IMAGE) with a
// cinematic Ken-Burns push-in, and plays on every page load. To use a real
// rendered film instead, drop it at /public/videos/intro.mp4 and set
// INTRO_VIDEO = "/videos/intro.mp4".
const INTRO_VIDEO = null;
const INTRO_IMAGE = "/images/intro.png";

const SKIP_AFTER_MS = 1800; // skip button appears early so users never feel stuck
const FALLBACK_MS = 4200; // cinematic intro length (matches the Ken-Burns motion)
const VIDEO_MAX_MS = 12000; // safety cap so we never get stuck on a stalled video

const TAGLINE = ["TRAIN", "HARD.", "LIVE", "STRONG."];

export default function IntroExperience() {
  const [show, setShow] = useState(true);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef(null);
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setShow(false);
    window.dispatchEvent(new Event("intro:done")); // cue deferred global FX
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const skipTimer = setTimeout(() => setCanSkip(true), SKIP_AFTER_MS);
    const endTimer = setTimeout(finish, INTRO_VIDEO ? VIDEO_MAX_MS : FALLBACK_MS);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(endTimer);
    };
  }, [finish]);

  // Release the scroll lock fully: clear the inline style AND the data-intro
  // gate so the CSS `overflow:hidden` rule no longer applies.
  const unlockScroll = () => {
    document.documentElement.setAttribute("data-intro", "done");
    document.body.style.overflow = "";
  };

  return (
    <div id="intro-root">
      <AnimatePresence onExitComplete={unlockScroll}>
        {show && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-iron-black"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              transition: { duration: 0.7, ease: easeIron },
            }}
            role="dialog"
            aria-label="Intro"
          >
            {/* Media layer: real video if provided, otherwise the AI-generated
                brand image animated with a cinematic Ken-Burns push-in. */}
            {INTRO_VIDEO ? (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                autoPlay
                muted
                playsInline
                onEnded={finish}
                onError={() => setTimeout(finish, FALLBACK_MS - SKIP_AFTER_MS)}
              >
                <source src={INTRO_VIDEO} type="video/mp4" />
              </video>
            ) : (
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.18, x: "-2%", y: "1%" }}
                animate={{ scale: 1.02, x: "1%", y: "-1%" }}
                transition={{ duration: FALLBACK_MS / 1000, ease: easePower }}
              >
                <Image
                  src={INTRO_IMAGE}
                  alt=""
                  aria-hidden="true"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* Scrim for logo legibility — lighter so the cinematic image reads */}
            <div className="absolute inset-0 bg-gradient-to-t from-iron-black/85 via-iron-black/35 to-iron-black/65" />

            {/* Ambient red light */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.9, 0.6], scale: [0.6, 1.1, 1] }}
              transition={{ duration: 2.4, ease: easePower }}
            />

            {/* Logo reveal — overlays video or stands alone */}
            <div className="relative z-10 flex flex-col items-center px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: easePower, delay: 0.3 }}
              >
                <Dumbbell className="h-10 w-10 text-accent" aria-hidden="true" />
              </motion.div>

              <h1 className="mt-6 overflow-hidden font-display uppercase leading-[0.9] text-ink-primary">
                <motion.span
                  className="block text-[clamp(2.5rem,9vw,6rem)]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: easePower, delay: 0.5 }}
                >
                  Iron <span className="text-accent">Elite</span>
                </motion.span>
                <motion.span
                  className="block text-[clamp(0.9rem,2.4vw,1.5rem)] tracking-[0.3em] text-ink-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Fitness Club
                </motion.span>
              </h1>

              {/* Tagline word-by-word */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                {TAGLINE.map((word, i) => (
                  <motion.span
                    key={word}
                    className="text-xs font-semibold uppercase tracking-eyebrow text-ink-tertiary sm:text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + i * 0.12 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Red energy sweep */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-2xl"
              initial={{ x: "-150%" }}
              animate={{ x: "350%" }}
              transition={{ duration: 1.1, ease: easeIron, delay: 2.9 }}
            />

            {/* Skip button */}
            <AnimatePresence>
              {canSkip && (
                <motion.button
                  type="button"
                  onClick={finish}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-8 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-secondary backdrop-blur transition-colors hover:border-accent hover:text-ink-primary sm:right-10"
                >
                  Skip intro
                  <SkipForward className="h-4 w-4" aria-hidden="true" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
