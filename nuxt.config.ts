// https://nuxt.com/docs/api/configuration/nuxt-config

import runtimeConfig from "./config/runtime.config";
import appConfig from "./config/app.config";
import viteConfig from "./config/vite.config";
import i18nConfig from "./config/i18n.config";

export default defineNuxtConfig({
  runtimeConfig,
  app: appConfig,
  vite: viteConfig,
  i18n: i18nConfig,
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  components: [{
    path: "~/components",
    pathPrefix: false,
  }],

  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],

  plugins: [
    "~/plugins/vee-validate.ts",
  ],
});
