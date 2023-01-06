// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vue-macros/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
  ],
  i18n: {},
})
