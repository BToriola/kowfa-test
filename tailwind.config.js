module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  content: ["./pages/**/*.{js,jsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-button': '#00FFA2',
      }
    },
    fontFamily: {
      'body': ['"Noto Sans"'],
    }
  },
  options: {
    safelist: [],
  },
  darkMode: `class`
};


