export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "usebootstrap",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
  ],
  css: [
    "@fontsource/roboto/400.css",
    "@fontsource/roboto/700.css",
    "@fontsource/montserrat/500.css",
    "@fontsource/montserrat/800.css",
    "./assets/scss/global.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use './assets/scss/_vars.scss' as *;
        @use './assets/scss/_mixins.scss' as *;
        `,
        },
      },
    },
  },
});
