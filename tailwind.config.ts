import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14181F",
          raised: "#1C222B",
          border: "#2B3340",
        },
        paper: {
          DEFAULT: "#F4EFE3",
          line: "#DDD4BE",
          dim: "#EDE6D6",
        },
        signal: {
          DEFAULT: "#F5820A",
          dim: "#C96B0C",
        },
        stamp: {
          DEFAULT: "#C23B2E",
        },
        ok: {
          DEFAULT: "#2E9E6B",
        },
        muted: "#9AA3AF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "stamp-thud": {
          "0%": { transform: "translateY(-40px) rotate(-18deg) scale(1.6)", opacity: "0" },
          "60%": { transform: "translateY(4px) rotate(-9deg) scale(1.02)", opacity: "1" },
          "100%": { transform: "translateY(0) rotate(-9deg) scale(1)", opacity: "1" },
        },
        "rise": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "stamp-thud": "stamp-thud 0.5s cubic-bezier(.2,.8,.3,1.2) forwards",
        "rise": "rise 0.6s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
