import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'NUXTFLIX'
  },
  build: {
    transpile: [
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer',
      'mdi-vue'
    ]
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-windicss',
    '@vueuse/nuxt'
  ],
  css: [
    '~/assets/css/styles.scss'
  ],
  vite: {
    plugins: [eslintPlugin()]
  }
})
