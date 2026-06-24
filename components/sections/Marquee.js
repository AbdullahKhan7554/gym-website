const WORDS = ["Strength", "Discipline", "Power", "Endurance", "Results", "Mindset"];

// Editorial kinetic brand strip — full-bleed, outlined display type scrolling
// infinitely with neon accent separators. Pauses on hover; pure transform.
export default function Marquee() {
  const track = [...WORDS, ...WORDS];
  return (
    <section
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-white/10 bg-iron-surface py-6 sm:py-8"
    >
      <div className="flex w-max items-center gap-8 animate-marquee group-hover:[animation-play-state:paused] sm:gap-12">
        {track.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-8 sm:gap-12">
            <span className="font-display text-4xl uppercase tracking-tight text-outline sm:text-6xl">
              {word}
            </span>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-glow-sm" />
          </span>
        ))}
      </div>
    </section>
  );
}
