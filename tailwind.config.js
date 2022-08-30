/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        androidColor: "#30DE81",
        windowsColor: "#FB3553",
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('./pages/fylo/images/logo-dark-mode.svg')",
        "logo-light-mode": "url('./pages/fylo/images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('./pages/fylo/images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode":
          "url('./pages/fylo/images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  plugins: [],
};
