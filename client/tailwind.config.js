module.exports = {
  mode: 'jit',
  content: [
    "./App.js",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'text': '0 2px 10px rgba(0, 0, 0, 0.3)', // Custom text shadow
      }
    },
  },
  plugins: [],
};
