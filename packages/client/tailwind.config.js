/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'very-tight': '0.7'
      },
      boxShadow: {
        'right-bottom-medium': '2px 0 5px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.15)'
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'white-beige-50': '#F9F9F9',
        'white-beige-100': '#d9d9d980',
        'white-beige-200': '#D9D9D9',
        'white-beige-300':'#F3F3F3',
        'white-beige-400': '#E5DAC8',
        'beige-50':'#FDF2D6',
        'beige-75':'#EADECC',
        'beige-100': '#9B8A70',
        'beige-200': '#706556',
        'beige-300':'#A79478',
        'discord-100': '#5865F2',
        'twitter-100': "#1DA1F2",
        'silver-100':'#C0C0C0',
        'silver-200':'#8B8B8B',
        'dark-yellow-100':'#E6A951'
      },
      backgroundImage: {
        'text-gradient': `
          linear-gradient(287.94deg, rgba(65, 56, 42, 0.7) 22.24%, rgba(141, 122, 94, 0) 54.65%, rgba(230, 218, 200, 0.7) 77.96%),
          linear-gradient(0deg, #A79478, #A79478),
          linear-gradient(0deg, #E6DAC8, #E6DAC8)
        `
      },
      fontSize: {
        '9xl-plus': '12rem' // 50% larger than text-9xl
      }
    },
  },
  plugins: [],
}