import colors from 'vuetify/es5/util/colors';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base:
      process.env.NODE_ENV === 'production' ? '/perfect-pitch-challenge/' : '',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ko',
    },
    titleTemplate(chunk) {
      return chunk
        ? `${chunk} - ${process.env.globalTitle}`
        : process.env.globalTitle;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '절대음감에 도전해보자!',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'ko_KR' },
      {
        name: 'og:url',
        content: 'https://vrisel.github.io/perfect-pitch-challenge',
      },
      {
        name: 'og:image',
        content:
          'https://vrisel.github.io/perfect-pitch-challenge/og220117.png',
      },
      /* { name: 'og:site_name', content: 'vrisel.github.io' }, */
      { name: 'og:title', content: process.env.globalTitle },
      { name: 'og:description', content: '절대음감에 도전해보자!' },

      /* { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        content: 'https://vrisel.github.io/perfect-pitch-challenge/',
      },
      {
        name: 'twitter:image',
        content:
          'https://vrisel.github.io/perfect-pitch-challenge/og220117.png',
      },
      { name: 'twitter:title', content: '절대음감 챌린지' },
      { name: 'twitter:description', content: '절대음감에 도전해보자!' }, */
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    globalTitle: '절대음감 챌린지',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ko',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['tone'],
  },
};
