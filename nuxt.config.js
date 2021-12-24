export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mochammad Fadholi | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=1' },
      { hid: 'description', name: 'description', content: 'Mochammad Fadholi | Software Engineer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        media: 'print',
        onload: "this.onload=null;this.removeAttribute('media');",
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
      }
    ]
  },
  router: {
    mode: 'history'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-typed.js', mode: 'client' },
    { src: '~/plugins/vue-sequential.js', mode: 'client' },
    { src: '~/plugins/vue-lazy-image.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      theme_color: '#1F2937'
    },
    autoRegister: true,
    icon: {
      source: 'static/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
