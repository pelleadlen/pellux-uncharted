/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: ["HelveticaNowDisplay", "sans-serif"],
      },
      colors: {
        primary: "#423FDE",
        secondary: "#5CC17B",
        tertiary: "#E7D144",
        warning: "#DE5F3F",
        surface: "#F2F2F2",
        surfaceSecondary: "#F8F7F7",
        surfaceHover: "#E6E6E6",
      },
      textColor: {
        primary: "#101010",
        secondary: "#686868",
        tertiary: "#E7D144",
      },
    },
  },
  plugins: [],
};
