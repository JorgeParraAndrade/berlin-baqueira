const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Grupo Empresarial Berlin Baqueira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
    
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~/plugins/i18n.js'
  ],

  generate: {
    routes: ['/', '/en']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
