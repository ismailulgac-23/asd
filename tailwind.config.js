module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)"
      },
      colors: {
        dark: "#2b2d43",
        primary: "#e51c52"
      },
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      }
    },
  },
  plugins: [],
};
