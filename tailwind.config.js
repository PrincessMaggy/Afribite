/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        p: {
          button: "#E2725B",
          button2: "#FFCC00",
          button3: "#808000",
          button4: "#D6D602",
        },
        n: {
          n1: "#333333",
          n2: "#666666",
          n3: "#999999",
          n4: "#cccccc",
          n5: "#FBF5E9",
          n6: "#F4F0EB",
          n7: "#FFFFFF",
          n8: "#F9F9F9",
        },
      },
      fontFamily: {
        pop: ["Poppins", "Arial", "sans-serif"],
      },
      width: {
        28: "40rem",
      },
      height: {
        80: "20rem",
      },
      backgroundImage: {
        backgroud: "url('./assets/background.png')",
      },
    },
  },
  plugins: [],
};
