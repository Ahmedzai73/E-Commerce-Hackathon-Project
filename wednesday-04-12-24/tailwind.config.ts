import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xxs': '360px',   // Ultra small devices
        'sm': '576px',    // Small devices
        'md': '768px',    // Medium devices
        'lg': '1024px',   // Large devices
        'xl': '1200px',   // Extra large devices
        '2xl': '1440px',  // Double extra large devices
        'xxl': '1600px',  // Extra extra large devices
      },
    },
  },
  plugins: [],
} satisfies Config;
