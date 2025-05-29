// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'itProger Project',
      // link: [
      //   { rel: 'stylesheet', href: 'css' }
      // ]
      meta: [
        { name: 'charset', content: 'utf-8' }
      ]
    }
  },
  modules: ['@nuxt/eslint', 'usebootstrap']
})