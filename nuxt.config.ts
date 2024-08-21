// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "@nuxt/fonts"],
  // fonts: {
  //   families: [
  //     { name: 'Cormorant Garamond', provider: 'google'},
  //   ]
  // },
  routeRules: {
    '/': { prerender: true }
  }
})