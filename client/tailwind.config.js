module.exports = {
  content: [
    // app
    "./src/App.jsx",
    "./src/index.js",

    // components
    "./src/components/Aspirations/index.jsx",
    "./src/components/Calendar/index.jsx",
    "./src/components/GetStarted/index.jsx",
    "./src/components/HamburgerMenu/index.jsx",
    "./src/components/Nav/index.jsx",

    // pages
    "./src/pages/Home.jsx",
    "./src/pages/Login.jsx",
    "./src/pages/NoMatch.jsx",
    "./src/pages/Signup.jsx",
    "./src/pages/CreateAspiration.jsx",
  ],
  theme: {
    extend: {
      colors: {
        rich: "#201F41",
        wine: "#422d53",
        rose: "#912E54",
        bubblegum: "#D1788F",
        cream: {
          '100': '#fdf7f3',
          '200': '#fcefe8',
          '300': '#fbe7dd',
          '400': '#faded2',
          '500': '#f9d7c7',
        } 
      },
    },
    plugins: [],
  },
};
