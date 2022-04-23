module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gill Sans"', 'sans-serif'],
      },
      colors: {
        blue: {
          400: '#5687e3',
          500: '#4369b2',
          600: '#3f62a4',
          700: '#35548b',
        },
      },
    },
  },
  plugins: [],
};
