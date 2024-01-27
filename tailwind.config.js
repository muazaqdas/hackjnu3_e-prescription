/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    screens:{
      // 'z':'0px',
      'xs':'320px',
       // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary': "#003773",
        'secondary':"#CCE7FE",
        'textSecondary':"#B4C7E7",
      },
      height: {
        'inherit': 'inherit'
      }, 
      minHeight: {
        'xs': '16rem'
      },    
      lineHeight: {
        '0': '0'
      },
      width:{
        '22': '5.5rem'
      },
      maxWidth:{
        '3xl': '51.7rem',
        '8xl':'84rem'
      },
      minWidth: {
        'md': '20rem'
      },
      fontSize: {
        '4xl': '2.75rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        abel: ['Abel', 'sans-serif']
      },
    },
  },
  plugins: [],
};
