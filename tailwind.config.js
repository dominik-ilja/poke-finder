module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-type-.{3,6}/
    }
  ],
  theme: {
    screens: {
      "2xs": "380px",
      "xs": "500px",
      "md": "768px",
      "lg": "1118px"
    },
    colors: {
      "white": "#fff",
      "black": "#000",
      "primary": "#e04543",
      "secondary": "#d4b45d",
      "dark": "#3c3b4d",
      "light": "#E6E4FF",
      "link": "#2669bb",
      "type-bug": "#adbd21",
      "type-dark": "#735a4a",
      "type-dragon": "#7b63e7",
      "type-electric": "#ffc631",
      "type-fairy": "#f7b5f7",
      "type-fighting": "#a55239",
      "type-fire": "#c36868",
      "type-flying": "#9cadf7",
      "type-ghost": "#6363b5",
      "type-grass": "#78be72",
      "type-ground": "#d6b55a",
      "type-ice": "#5acee7",
      "type-normal": "#ada594",
      "type-poison": "#cd7cff",
      "type-psychic": "#ff73a5",
      "type-rock": "#bda55a",
      "type-steel": "#adadc6",
      "type-water": "#399cff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
};
