import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-accent text-iron-black hover:bg-accent-hot shadow-glow-cta hover:shadow-glow-lg",
  secondary:
    "bg-iron-surface2 text-ink-primary border border-white/10 hover:border-white/25 hover:bg-iron-surface3",
  ghost:
    "bg-transparent text-ink-primary border border-white/15 hover:border-accent hover:text-accent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `press inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
