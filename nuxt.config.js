export default {
  mode: "universal",
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
      { rel: "stylesheet", href: "/dist/css/adminlte.min.css" },
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

      // Promociones
      // <script src="https://www.allseasons.tur.ar/ws/wc-promociones/dist/allseasons-promociones/allseasons-promociones.js"></script>
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
    // "~/plugins/webcomponents.js",
    { src: "~/plugins/vue-notification.js", ssr: false },
    { src: "~/plugins/amCharts.js", ssr: false },
    { src: "~plugins/vue-select.js", ssr: false }
  ],
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
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
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
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  // Configuración del moment español
  moment: {
    locales: ["es"]
  }
};
