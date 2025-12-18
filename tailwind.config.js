/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'torchwood-primary-teal': '#03a678',
        'torchwood-accent-orange': '#f27405',
        'torchwood-dark-teal': '#014040',
        'torchwood-secondary-teal': '#02735e',
      },
    },
  },
  plugins: [],
}

