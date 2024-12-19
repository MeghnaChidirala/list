import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Include all files in the 'app' folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in 'components'
    "./public/**/*.{js,ts,jsx,tsx}",    // Optional: If public assets contain classnames
  ],
  theme: {
    extend: {
      colors: {
        red: {
          400: "#f87171",  // Custom red (matches your theme)
          500: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Customize font if needed
      },
    },
  },
  plugins: [],
};

export default config;