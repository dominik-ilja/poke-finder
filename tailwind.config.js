module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  safelist: [
    {
      pattern: /(bg-type-|border-type-|text-type-).{3,}/,
    },
    {
      pattern: /grid-cols-\d/,
      variants: ["sm", "md", "lg"]
    }
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          "white": "#fff",
          "black": "#000",
          "primary": "#e04543",
          "secondary": "#d4b45d",
          "link": "#2669bb",

        },
        "dark": {
          default: "#232323",
          bg: "#3c3b4d",
          "bg-alt": "#21145e",
          title: "#fff",
          text: "#b7b7b7",
        },
        "light": {
          default: "#e6e4ff",
          bg: "#5c6cfd",
          // "bg-alt": "#b7d2eb",
          "bg-alt": "#5eaffb",
          text: "#242424",
        },
        "type": {
          "bug": "#adbd21",
          "dark": "#735a4a",
          "dragon": "#7b63e7",
          "electric": "#ffc631",
          "fairy": "#f7b5f7",
          "fighting": "#a55239",
          "fire": "#c36868",
          "flying": "#9cadf7",
          "ghost": "#6363b5",
          "grass": "#78be72",
          "ground": "#d6b55a",
          "ice": "#5acee7",
          "normal": "#ada594",
          "poison": "#cd7cff",
          "psychic": "#ff73a5",
          "rock": "#bda55a",
          "steel": "#adadc6",
          "water": "#399cff",
        },
      },
    },
    screens: {
      "xs": "380px",
      "sm": "500px",
      "md": "768px",
      "lg": "1118px"
    },
    backgroundImage: {
      "clouds": "url('/src/assets/clouds.png')"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
};
