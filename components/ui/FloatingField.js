"use client";

// Floating-label field. Uses the peer + :placeholder-shown technique so the
// label animates up on focus or when filled. Works for input + textarea.
const base =
  "peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-6 text-sm text-ink-primary transition-colors placeholder:text-transparent focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

const labelBase =
  "pointer-events-none absolute left-4 top-4 text-sm text-ink-tertiary transition-all duration-200 peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-eyebrow peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-eyebrow";

export default function FloatingField({
  id,
  label,
  type = "text",
  textarea = false,
  rows = 3,
  required = false,
  ...props
}) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          placeholder=" "
          className={`${base} resize-none`}
          {...props}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder=" "
          className={base}
          {...props}
        />
      )}
      <label htmlFor={id} className={labelBase}>
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
    </div>
  );
}
