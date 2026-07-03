import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7c1616",
          dark: "#6e1313",
          deep: "#5e1010",
          button: "#7c1d1d",
        },
        ink: "#20262e",
        body: "#3a424c",
        bodyMuted: "#5a636d",
        cream: "#fdfbf3",
        creamHome: "#f7f4ec",
        tan: "#e8e5d8",
        borderCream: "#e2ddce",
        borderCream2: "#eee6d6",
        borderInput: "#cfc9ba",
        night: "#0b0b0b",
        starGold: "#f4b400",
        footerText: "#c8c8c8",
        footerLegal: "#9a9a9a",
        successGreen: "#1f8a5b",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        nav: "1320px",
        gallery: "1180px",
        content: "1100px",
        privacy: "880px",
        band: "860px",
        article: "820px",
        form: "840px",
      },
      boxShadow: {
        card: "0 3px 14px rgba(0,0,0,.12)",
        menu: "0 14px 34px rgba(0,0,0,.18)",
        hoverLift: "0 8px 26px rgba(0,0,0,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
