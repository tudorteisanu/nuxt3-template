import type { NuxtI18nOptions } from "@nuxtjs/i18n";

const i18nConfig: NuxtI18nOptions = {
  baseUrl: "http://localhost:3000",
  lazy: true,
  langDir: "locales/",
  strategy: "prefix_except_default",
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English(US)",
      file: "en.ts",
    },
    {
      code: "ru",
      iso: "ru-RU",
      name: "Russian",
      file: "ru.ts",
    },
  ],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    legacy: false,
  },
  detectBrowserLanguage: false,
};

export default i18nConfig;
