export default {
  // mode: "universal",
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/plugins/fontawesome-free/css/all.min.css" },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
      },
      { rel: "stylesheet", href: "/plugins/jqvmap/jqvmap.min.css" },
      //   { rel: "stylesheet", href: "/dist/css/adminlte.min.css" },
      { rel: "stylesheet", href: "/dist/css/adminlte.css" },
      {
        rel: "stylesheet",
        href: "/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/daterangepicker/daterangepicker.css"
      },
      { rel: "stylesheet", href: "/plugins/summernote/summernote-bs4.css" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ],
    script: [
      { src: "/plugins/jquery/jquery.min.js", body: true },
      { src: "/plugins/jquery-ui/jquery-ui.min.js", body: true },
      { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
      { src: "/plugins/chart.js/Chart.min.js", body: true },
      { src: "/plugins/sparklines/sparkline.js", body: true },
      { src: "/plugins/jqvmap/jquery.vmap.min.js", body: true },
      { src: "/plugins/jqvmap/maps/jquery.vmap.usa.js", body: true },
      { src: "/plugins/jquery-knob/jquery.knob.min.js", body: true },
      { src: "/plugins/moment/moment.min.js", body: true },
      { src: "/plugins/daterangepicker/daterangepicker.js", body: true },
      {
        src:
          "/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
        body: true
      },
      { src: "/plugins/summernote/summernote-bs4.min.js", body: true },
      {
        src: "/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
        body: true
      },
      { src: "/dist/js/adminlte.js", body: true },
      {
        src:
          "https://www.allseasons.tur.ar/ws/wc-promociones/dist/allseasons-promociones/allseasons-promociones.js"
      }
    ],
    bodyAttrs: {
      class: "hold-transition sidebar-mini layout-fixed"
    }
  },

  /*
   ** Route
   */
  router: {
    middleware: ["redirectToRoute"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vuelidate.js",
    "~/plugins/vue-tables.js",
    // "~/plugins/alerts.js",

    // "~/plugins/webcomponents.js",
    { src: "~/plugins/amCharts.js", ssr: false },
    { src: "~plugins/vue-select.js", ssr: false },
    { src: "~plugins/alerts.js", ssr: false }
  ],

  /*
   ** Config authenticate
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://localhost:8000/auth/signin',
            method: 'post',
            propertyName: false
          },
          // logout: {
          //   url: '/auth/logout',
          //   method: 'post'
          // },
          // user: {
          //   url: '/auth/profile',
          //   method: 'get',
          //   propertyName: false
          // }
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    redirect: {
      login: "/menu",
      home: "/auth/register"
    }
  },

  // // Config auth
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: "/auth/login", method: "post", propertyName: "token" },
  //         //   user: { url: "/auth/user", method: "get", propertyName: "user" },
  //         // logout: { url: "/auth/logout", method: "post" }
  //       },
  //       tokenRequired: true,
  //       // tokenType: 'Bearer'
  //     }
  //   },
  //   // redirect: {
  //   //   login: "/auth/login",
  //   //   home: "/"
  //   // }
  // },
  /*

   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Simple usage
    "@nuxtjs/moment",

    // With options
    [
      "@nuxtjs/moment",
      {
        /* module options */
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",

    // Proxy Cors
    "@nuxtjs/proxy",

    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",

    // Autenticación
    "@nuxtjs/auth",

    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",

    // Para select2
    "nuxt-vue-select",
    // With options
    [
      "nuxt-vue-select",
      {
        /* module options */
      }
    ]

    // [
    //   "vue-sweetalert2/nuxt",
    //   {
    //     confirmButtonColor: "#41b882",
    //     cancelButtonColor: "#ff7674"
    //   }
    // ]
  ],

  proxy: {
    "/backend": {
      target: "http://localhost:8000",
      pathRewrite: {
        "^/backend": "/",
      },
    },
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: "http://localhost:8000",
    credentials: true
  },
  /*
   ** Build configuration
   */
  build: {
    // Evitar que ponga todos los estilos en linea esto es solo para desarrollo
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },

  // Configuración del moment español
  moment: {
    locales: ["es"]
  }

  //   auth: {
  //     strategies: {
  //       local: {
  //         endpoints: {
  //           login: {
  //             url: "/auth/login",
  //             method: "post",
  //             propertyName: "token"
  //           },
  //           logout: { url: "/auth/logout", method: "post" }
  //           //   user: { url: "/auth/user", method: "get", propertyName: "user" }
  //         }
  //         // tokenRequired: true,
  //         // tokenType: 'bearer'
  //       }
  //     }
  //   }
}
