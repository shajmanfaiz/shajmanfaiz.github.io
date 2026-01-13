module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightroyalblue: '#95a8df',
        backblue: '#3b3c4e',
        background: '#0e0c38',
        back2: '#211f61',
      },
      fontFamily: {
        main: ['Oswald', 'sans-serif'],
        sec: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
