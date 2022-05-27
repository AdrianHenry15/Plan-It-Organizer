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
        rich: {
          '100': '#c7c6e4',
          '200': '#908ec9',
          '300': '#5956ae',
          '400': '#3b3979',
          '500': '#201F41',
        }, 
        wine: {
          '100': '#d9cde4',
          '200': '#b49bc9',
          '300': '#8f6aae',
          '400': '#694784',
          '500': '#422d53',
        }, 
        rose: {
          '100': '#efcedb',
          '200': '#e09eb7',
          '300': '#d06d93',
          '400': '#c13d70',
          '500': '#912E54',
        }, 
        bubblegum: {
          '100': '#f5e3e8',
          '200': '#ecc9d2',
          '300': '#e3adbb',
          '400': '#da93a5',
          '500': '#D1788F',
        },
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
