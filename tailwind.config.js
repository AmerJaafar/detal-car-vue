/** @type {import('tailwindcss').Config} */
export default {
  content: [".public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      myblue: "#00b8b8",
      myBlack: "#333",
      myWight: "#fff",
      lightColor: "#666",
      lightBg: "#eee",
      borderColor: "rgba(0,0,0,.1)",
      bginherit: "inherit",
      opacityWhite: "rgb(255 255 255 / 0%)",
      red: "#EF4444",
    },
    fontFamily: {
      Poppins: "Poppins, sans-serif",
    },
    borderWidth: {
      0: "0px",
      0.2: "0.2rem",
      1: "1px",
    },

    fontSize: {
      2: "2rem",
      1: "1rem",
      1.5: "1.5rem",
      2.5: "2.5rem",
      "62.5%": "62.5%",
      "55%": "55%",
      "50%": "50%",
      5: "5rem",
      0.9: "0.9rem",
    },

    extend: {
      lineHeight: {
        20: "5rem",
      },
      boxShadow: {
        "3xl": " 0 .5rem 1rem rgba(0,0,0.1)",
      },
      width: {
        50: "50rem",
        90: "90%",
      },
      height: {
        30: "30vh",
      },
      minHeight: {
        80: "80vh",
      },
      backgroundImage: {
        hero: "url(../assets/images/home.jpg) ",
        abuot: "url(../assets/images/about.jpg) ",
      },
      gridTemplateColumns: {
        20: "repeat(auto-fit, minmax(20rem, 1fr))",
        15: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
