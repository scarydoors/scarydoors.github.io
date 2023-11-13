import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Syne", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        yellow: {
          DEFAULT: "#FFD500",
          50: "#FFFACF",
          100: "#FFF8B8",
          200: "#FFF18A",
          300: "#FFE95C",
          400: "#FFE02E",
          500: "#FFD500",
          600: "#D1AC00",
          700: "#A38300",
          800: "#755D00",
          900: "#473700",
          950: "#302500",
        },
      },
      keyframes: {
        appear: {
          "0%": {
            transform: "translate(0px, 16px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        blink: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-scale": {
          "0%": {
            opacity: 0,
            transform: "scale(1.25)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1.0)",
          },
        },
      },
      animation: {
        appear: "appear 0.3s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        blink: "blink 1s infinite steps(1, start)",
        "fade-in-scale": "fade-in-scale 0.4s ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
