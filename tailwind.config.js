module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        card1: "hsl(31, 77%, 52%)",
        card2: "hsl(184, 100%, 22%)",
        card3: "hsl(179, 100%, 13%)",
        traspw: "hsla(0, 0%, 100%, 0.75)",
        vlgray: "hsl(0, 0%, 95%)"
      },
      fontFamily: {
        body: ["Lexend Deca"],
        title: ["Big Shoulders Display"]
      },
      maxHeight: {
        card: "50rem" 
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ["first", "last"]
    },
  },
  plugins: [],
}
