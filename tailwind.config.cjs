module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        top: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        sky: "0px 4px 0px #22F2FF",
        pink: "0px 4px 0px #EF53DF",
        yellow: "0px 4px 0px #FEAC0D",
        grass: "0px 4px 0px #9EFF22",
        none: "0 0 0",
      },
      fontFamily: {
        default: ["Noto Sans"],
      },
      colors: {
        background: "#10032B",
        accent: "#CB2BF3",
        sky: "#22F2FF",
        pink: "#EF53DF",
        yellow: "#FEAC0D",
        grass: "#9EFF22",
        "sky-hover": "#2260FF",
        "pink-hover": "#EF5365",
        "yellow-hover": "#FE640D",
        "grass-hover": "#26FF22",
      },
    },
  },
  plugins: [],
};
``;
