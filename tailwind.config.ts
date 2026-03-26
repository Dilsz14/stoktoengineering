import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stotko: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#1a1a1a",
          "gray-mid": "#2e2e2e",
          "gray-light": "#f0f0f0",
          "gray-text": "#8a8a8a",
        },
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
