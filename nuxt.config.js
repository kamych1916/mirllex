
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Mirllex — digital studio | Branding & Websites & Systems & Mobile Apps & Marketing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},
      
      { name: "robots", content: "index, follow"},
      { name: "theme-color", content: "#fff"},
      { name: "description", content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      { name: "keywords", content: 'mirllex digital studio, digital студия, диджитал студия, digital studio, digital marketing, digital маркетинг, диджитал маркетинг, digital agency, digital агенство, диджитал агенство, разработка вебсайта, лендинг' },
      
      { property: 'og:url', content: 'http://perugino.club/'},
      { property: 'og:title', content: 'Mirllex — digital studio | Branding & Websites & Marketing'},
      { property: 'og:description', content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      { property: 'og:type', content: 'website' },
      // { property: 'og:image:type', content:'image/png'},
      // { property: 'og:image', content: 'http://perugino.club/heading__img.png'},


      { property: 'twitter:title', content: 'Mirllex — digital studio | Branding & Websites & Marketing'},
      { property: 'twitter:description', content: 'Мы — digital студия, которая помогает бизнесу выделяться. Разрабатываем качественный продукт — Брендинг & Маркетинг & Веб-сайты' },
      // { property: 'twitter:image', content: 'http://perugino.club/heading__img.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { itemprop: 'thumbnailUrl', href: 'http://perugino.club/heading__img.png'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"
    '@/assets/scss/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/b-icons',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 600 }],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
