/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontSize: {
      "display-2xl": [
        "4.5rem",
        {
          lineHeight: "5.625rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-xl": [
        "3.75rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-lg": [
        "3rem",
        {
          lineHeight: "3.75rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-md": [
        "2.25rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-sm": [
        "1.875rem",
        {
          lineHeight: "2.375rem",
        },
      ],
      "display-xs": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.875rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      md: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      xs: [
        "0.75rem",
        {
          lineHeight: "1.125rem",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        900: "#101828",
        800: "#1D2939",
        700: "#344054",
        600: "#475467",
        500: "#667085",
        400: "#98A2B3",
        300: "#D0D5DD",
        200: "#EAECF0",
        100: "#F2F4F7",
        50: "#F9FAFB",
        25: "#FCFCFD",
      },
      primary: {
        900: "#164C63",
        800: "#155B75",
        700: "#0E7090",
        600: "#088AB2",
        500: "#06AED4",
        400: "#22CCEE",
        300: "#67E3F9",
        200: "#A5F0FC",
        100: "#CFF9FE",
        50: "#ECFDFF",
        25: "#F5FEFF",
      },
      error: {
        900: "#7A271A",
        800: "#912018",
        700: "#B42318",
        600: "#D92D20",
        500: "#F04438",
        400: "#F97066",
        300: "#FDA29B",
        200: "#FECDCA",
        100: "#FEE4E2",
        50: "#FEF3F2",
        25: "#FFFBFA",
      },
      warning: {
        900: "#7A2E0E",
        800: "#93370D",
        700: "#B54708",
        600: "#DC6803",
        500: "#F79009",
        400: "#FDB022",
        300: "#FEC84B",
        200: "#FEDF89",
        100: "#FEF0C7",
        50: "#FFFAEB",
        25: "#FFFCF5",
      },
      success: {
        900: "#054F31",
        800: "#05603A",
        700: "#027A48",
        600: "#039855",
        500: "#12B76A",
        400: "#32D583",
        300: "#6CE9A6",
        200: "#A6F4C5",
        100: "#D1FADF",
        50: "#ECFDF3",
        25: "#F6FEF9",
      },
    },
    extend: {
      fontFamily: {
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-radix"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
