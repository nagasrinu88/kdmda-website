/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'table-bg': '#FFFBEB', // bg-yellow-100
        'table-header-bg': '#FEF3C7', // bg-yellow-200
        'table-divider': '#FDE68A', // divide-yellow-300
      },
    },
  },
  plugins: [],
};
