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
        brazilian: {
          yellow: '#FFD700',
          green: '#009B3A',
          blue: '#002776',
          coral: '#FF6B6B',
          sand: '#F5DEB3',
          ocean: '#4A90E2',
          sunset: '#FF6347',
          palm: '#228B22',
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
