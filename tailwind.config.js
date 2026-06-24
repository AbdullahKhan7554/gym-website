/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          black: "#050505",
          surface: "#0f0f0f",
          surface2: "#161616",
          surface3: "#1f1f1f",
          line: "#262626",
        },
        accent: {
          DEFAULT: "#39ff14",
          hot: "#6dff4d",
          deep: "#23c40a",
          muted: "#1a6b0f",
        },
        ink: {
          primary: "#f8f8f8",
          secondary: "#a8a8a8",
          tertiary: "#6e6e6e",
          disabled: "#4a4a4a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      borderRadius: {
        card: "24px",
        xl2: "32px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.6)",
        md: "0 4px 12px rgba(0,0,0,0.7)",
        lg: "0 12px 32px rgba(0,0,0,0.8)",
        xl: "0 24px 64px rgba(0,0,0,0.85)",
        card: "0 8px 24px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)",
        "glow-sm": "0 0 12px rgba(57,255,20,0.35)",
        "glow-md": "0 0 24px rgba(57,255,20,0.45)",
        "glow-lg": "0 0 48px rgba(57,255,20,0.55), 0 0 96px rgba(57,255,20,0.25)",
        "glow-cta": "0 0 0 1px rgba(109,255,77,0.45), 0 8px 32px rgba(57,255,20,0.35)",
      },
      backdropBlur: {
        glass: "20px",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
