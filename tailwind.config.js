/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#FCFCFC',
        'bg-surface': '#EFEBE6',
        'accent-primary': '#B96B52',
        'accent-secondary': '#7A8B76',
        'text-main': '#1F2224',
        'text-muted': '#6B7075',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
      },
    },
  },
  plugins: [],
}
