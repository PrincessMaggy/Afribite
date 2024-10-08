/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        eggshell: "#fffcf2",
        nbord: "#f4e1c133",
        
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
      colors: {
        'terra-cotta': '#E2725B',
      },
      spacing: {
        '115': '115px',
      },
      screens: {
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '1330px',
        // => @media (min-width: 1330px) { ... }
  
      gridTemplateRows: {
        // Simple 16 row grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
};
