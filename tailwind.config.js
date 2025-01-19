/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bgZoom: 'bgZoom 10s infinite alternate',
      },
      keyframes: {
        bgZoom: {
          '0%': {
            backgroundSize: '100%',
            backgroundPosition: 'center center',
          },
          '100%': {
            backgroundSize: '120%',
            backgroundPosition: 'center top',
          },
        },
      },
    },
  },
  plugins: [],
}

