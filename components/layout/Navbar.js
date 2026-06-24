"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while overlay menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-px flex h-16 items-center justify-between sm:h-20"
        >
          <Link
            href="#hero"
            className="flex items-center gap-2 text-ink-primary"
            aria-label="Iron Elite Fitness Club home"
          >
            <Dumbbell className="h-6 w-6 text-accent" aria-hidden="true" />
            <span className="font-display text-lg uppercase tracking-wide sm:text-xl">
              Iron<span className="text-accent">Elite</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" variant="primary" className="px-6 py-2.5">
              Join Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-ink-primary lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-iron-black/98 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-px flex h-16 items-center justify-between sm:h-20">
              <span className="font-display text-lg uppercase tracking-wide text-ink-primary">
                Iron<span className="text-accent">Elite</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-ink-primary"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="container-px flex flex-1 flex-col justify-center gap-1"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl uppercase tracking-wide text-ink-primary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Join Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
