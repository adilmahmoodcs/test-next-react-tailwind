module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/Rectangle.svg')",
      },
      colors: {
        "hero-teal": "#88D3ce",
        "hero-dark": "#423864",
        "dark-800": "#181818",
        "dark-900": "#131313",
        primary: "#2e1a61",
        "primary-500": "#2e1a6180",
        "primary-700": "#2e1a61aa",
      },
      height: {
        100: "28rem",
        108: "32rem",
        114: "36rem",
        128: "46rem",
      },
      minHeight: {
        100: "28rem",
        108: "32rem",
        114: "36rem",
        128: "46rem",
      },
    },
  },
  plugins: [],
};
