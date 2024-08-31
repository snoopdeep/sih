// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(119.54deg, #000046 0%, #1cb5e0 100%)",
        "top-gradient": "linear-gradient(119.54deg,#d1913c 0,#ffd194 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(119.54deg, #4b4b4b 0%, #ff8c00 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
