import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      colors: {
         black: "#020202",
         white: "rgba(255, 255, 255, 1)",
         lightBlue: "#D4D8FF",
         purple: "#573BE9",
         pink: "#FFDBCF",
         grey: "#FFDBCF",
         inputBg: "#F0F0F0",
         grad: "linear-gradient(153deg, #FEE4E5 7.77%, #E5FFD9 74.58%)",
      },
      boxShadow: {
         btnShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
   },
   plugins: [],
};
export default config;
