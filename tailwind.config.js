/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oryzo: {
          bg: "#0a0a0a",
          card: "#121214",
          surface: "#18181b",
          border: "#27272a",
          accent: "#00f0ff",
          lock: "#ff3366",
          purple: "#7928ca"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
