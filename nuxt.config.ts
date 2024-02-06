export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  app: {
    baseURL: '/mbc-studio/',
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: { lang: "ru" },
      titleTemplate: "MBC-Studio | %s",
      meta: [{ name: "description", content: "Разработка" }],
    },
  },
  css: ["normalize.css", "~/assets/scss/main.scss"],
});
