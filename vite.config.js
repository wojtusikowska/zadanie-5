import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  // Tutaj podajemy nazwę Twojego repozytorium na GitHubie
  base: '/zadanie-5/', 
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
})