const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
          return { selector: to.hash }
      } else if (savedPosition) {
          return savedPosition;
      } else {
          return { x: 0, y: 0 }
      }
    },    
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'OSWeekends',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'fluid-icon', href: '/favicon.ico', title: 'OSW' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css", integrity: "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz", crossorigin: "anonymous" },
    ],
    script: [
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
    '~/assets/style/app.styl',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-scrollto',
    //'@plugins/vue-awesome-swiper',
    { src: '~/plugins/nuxt-swiper-plugin', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxyHeaders: false,
    credentials: false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
};
