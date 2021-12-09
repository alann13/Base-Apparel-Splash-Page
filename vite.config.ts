import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          theme: {
            boxShadow: {
              DEFAULT: '0px 15px 20px 0px rgba(198,110,110,0.25)',
            },
            extend: {
              backgroundImage: {
                pattern: "url('./images/bg-pattern-desktop.svg')",
              },
              inset: {
                '10perc': '10%',
                '15perc': '15%',
                '20perc': '20%',
              },
              screens: {
                'big-tablet': '960px',
              },
            },
            fontFamily: {
              sans: ["'Josefin Sans'", 'sans-serif'],
            },
            letterSpacing: {
              extremeWide: '10.5px',
            },
            gradientColorStops: {
              secondary: '#F8C3BF',
              tertiary: '#EE8B8B',
            },
            textColor: {
              dark: '#423A3A',
              primary: '#CE9898',
              secondary: '#F8C3BF',
              tertiary: '#EE8B8B',
              error: '#F96464',
            },
            placeholderColor: {
              primary: '#CE9898',
            },
          },
          darkMode: false,
        }),
        autoprefixer(),
      ],
    },
  },
})
