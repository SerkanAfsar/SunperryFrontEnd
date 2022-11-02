/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
     extend: {
      fontFamily: {
        JostBlack: ["Jost-Black", "sans-serif"],
        JostBlackItalic: ["Jost-BlackItalic", "sans-serif"],
        JostBold: ["Jost-Bold", "sans-serif"],
        JostBoldItalic: ["Jost-BoldItalic", "sans-serif"],
        JostExtraBold: ["Jost-ExtraBold", "sans-serif"],
        JostExtraBoldItalic: ["Jost-ExtraBoldItalic", "sans-serif"],
        JostItalic: ["Jost-Italic", "sans-serif"],
        JostLight: ["Jost-Light", "sans-serif"],
        JostLightItalic: ["Jost-LightItalic", "sans-serif"],
        JostMedium: ["Jost-Medium", "sans-serif"],
        JostMediumItalic: ["Jost-MediumItalic", "sans-serif"],
        JostRegular: ["Jost-Regular", "sans-serif"],
        JostSemibold: ["Jost-Semibold", "sans-serif"],
        JostSemiboldItalic: ["Jost-SeminoldItalic", "sans-serif"],
        JostThin: ["Jost-Thib", "sans-serif"],
        JostThinItalic: ["Jost-ThinItalic", "sans-serif"],
      }  
    },
     colors:{
        'customFontColor':'#171717',
        'customRedColor':'#ff4d4d',
        'customGrayColor':'#f2f2f2',
        'searchColor':'#c1c1c1',
        'white':'#fff',
        'serviceTextColor':'#777',
        'footerGrayColor':'#f5f5f5',
        'footerCustomFontColor':'#707070',
        'color-basketGrayColor':'#ebeded'
      }
  },
  plugins: [],
}
