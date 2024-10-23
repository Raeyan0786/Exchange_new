import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors');
// const withMT = require("@material-tailwind/react/utils/withMT");
delete colors?.lightBlue;
delete colors?.warmGray;
delete colors?.trueGray;
delete colors?.coolGray;
delete colors?.blueGray;
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {

    breakpoint: {
      grid_columns: {
        // Define the values for grid_columns at different breakpoints
        sm: 2, // Example: 2 columns for small screens
        md: 3, // Example: 3 columns for medium screens
        lg: 4, // Example: 4 columns for large screens
        xl: 5, // Example: 5 columns for extra large screens
      },
    },
    // screens: {
    //   sm: '576px',
    //   md: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    //   '2xl': '1400px',
    // },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //   },
    //   screens: {
    //     sm: '100%',
    //     md: '540px',
    //     lg: '720px',
    //     xl: '1140px',
    //     '2xl': '1320px',
    //   },
    // },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': '1400px',
      // xxl: "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        '2xl': '1320px',
        '3xl': '1520px',
        '4xl': '1720px',
      },
    },
    extend: {
      
      // colors:{
      //   "light_yellow":"#FCAA47",
      //   "dark_green":"#13484E",
      //   "light_black":"#5C5C5C",

      // },
      colors: {
        brand: {
          DEFAULT: '#13484E',
        bg: '#F6F6F6',
        },
        light_gray:"#F0F0F0",
        light_yellow:"#FCAA47",
        dark_green:"#13484E",
        light_black:"#5C5C5C",
        graniteGray: '#696767',
        scarlet: '#ff280017',
        crimson: '#E50F0F',
        caramel: '#FFD88D',
        palePink: '#F8D7DA',
        bloodOrange: '#D70014',
        lightGray: '#D6CFCF',
        cultured: '#F6F6F6',
        islamicGreen: '#029A11',
        magicMint: '#B6FFBD',
        mistyRose: '#FDE3DE',
        ...colors,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'group-bg': "url('/Image/Group.png')",
      },
      
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
export default config