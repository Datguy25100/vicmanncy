import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F7A54",
          dark: "#155C3F",
          light: "#2FA66B",
        },
        secondary: {
          DEFAULT: "#2FA66B",
        },
        accent: {
          DEFAULT: "#F2A93B",
          dark: "#DA9328",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          tint: "#F5F9F6",
        },
        ink: {
          DEFAULT: "#1B2A24",
          muted: "#5B6660",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.03", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2.5vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(27,42,36,0.04), 0 8px 24px -12px rgba(27,42,36,0.12)",
        "card-hover": "0 4px 8px rgba(27,42,36,0.06), 0 16px 32px -12px rgba(31,122,84,0.18)",
        cta: "0 8px 20px -6px rgba(242,169,59,0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "sun-arc": "conic-gradient(from 180deg at 50% 100%, #F2A93B 0deg, #2FA66B 180deg, transparent 180deg)",
      },
      keyframes: {
        "rise": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "sun-travel": {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
