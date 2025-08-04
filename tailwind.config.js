/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gradient-to-br',
    'from-slate-50',
    'to-blue-50',
    'text-transparent',
    'bg-clip-text',
    'bg-gradient-to-r',
    'from-blue-600',
    'to-purple-600',
    'hover:from-blue-700',
    'hover:to-purple-700',
    'shadow-lg',
    'hover:shadow-xl',
    'md:text-6xl',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
