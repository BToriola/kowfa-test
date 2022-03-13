module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  content: ["./pages/**/*.{js,jsx}",
            "./Components/**/*.{js,ts,jsx,tsx}",
          ],
  options: {
    safelist: [],
  },


  darkMode: `class`
};
