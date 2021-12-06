import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          theme: {
            extend: {
              backgroundImage: {
                pattern: "url('./images/bg-pattern-desktop.svg')",
              },
            },
            colors: {
              black: { default: '#423A3A' },
              white: { default: '#FFFFFF' },
              red: {
                default: '#CE9898',
                light: '#F8BFBF',
                dark: '#EE8B8B',
                error: '#F96464',
              },
            },
            fontFamily: {
              sans: ["'Josefin Sans'", 'sans-serif'],
            },
          },
          darkMode: false,
        }),
        autoprefixer(),
      ],
    },
  },
})
