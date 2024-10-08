// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  alias: {
    "@": resolve(__dirname, "/"),
    "assets": "/<rooDir>/assets",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    ["@nuxtjs/google-fonts", {
      families: {
        Inter: [400, 700],
      },
    }],
    "@nuxt/ui",
    "@nuxt/content",
    '@vueuse/nuxt',
  ],
})