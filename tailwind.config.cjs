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
        purple: "0px 4px 0px #6A52FF",
        none: "0 0 0",
      },
      fontFamily: {
        default: ["Noto Sans"],
      },
      backgroundImage: {
        view: "url(images/view_background.png)",
      },
      colors: {
        background: "#10032B",
        accent: "#CB2BF3",
        sky: "#22F2FF",
        pink: "#EF53DF",
        yellow: "#FEAC0D",
        grass: "#9EFF22",
        purple: "#6A52FF",
        "sky-active": "#00CEFB",
        "pink-active": "#EE22DA",
        "yellow-active": "#FE640D",
        "grass-active": "#26FF22",
        "purple-active": "#2F0DFF",
      },
    },
  },
  plugins: [],
};
``;
