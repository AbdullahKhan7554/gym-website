import Link from "next/link";
import { Dumbbell, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative border-t border-white/10 bg-iron-black pt-16">
      <div className="container-px">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="#hero"
              className="flex items-center gap-2 text-ink-primary"
              aria-label="Iron Elite Fitness Club home"
            >
              <Dumbbell className="h-6 w-6 text-accent" aria-hidden="true" />
              <span className="font-display text-xl uppercase tracking-wide">
                Iron<span className="text-accent">Elite</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              Lahore&apos;s elite fitness destination. Train hard, live strong, and
              become the strongest version of yourself with world-class coaching.
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm text-ink-secondary">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {CONTACT.address}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-secondary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-iron-black"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="text-xs uppercase tracking-eyebrow text-ink-tertiary">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours */}
          <div>
            <h2 className="text-xs uppercase tracking-eyebrow text-ink-tertiary">
              Opening Hours
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-secondary">
              <li className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-ink-primary">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday – Sunday</span>
                <span className="text-ink-primary">7 AM – 10 PM</span>
              </li>
              <li className="flex justify-between gap-4 text-accent">
                <span>Women-only</span>
                <span>7–10 AM · 5–8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-ink-tertiary sm:flex-row">
          <p>© {year} Iron Elite Fitness Club. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-ink-secondary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-ink-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
