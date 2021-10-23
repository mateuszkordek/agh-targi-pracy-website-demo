import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Targi Pracy AGH',
        htmlAttrs: {
            lang: 'pl'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Strona główna Targów Pracy AGH. Lista Wystawców, katalog z ofertą rekrutacyjną, harmonogram wydarzeń.' },

            // (albo rfg)
            { name: "msapplication-TileColor", content: "#479665" },
            { name: "theme-color", content: "#479665" },
            { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
            { property: "og:title", content: "Strona główna Targów Pracy AGH" },
            { property: "og:description", content: "Strona główna Targów Pracy AGH. Lista Wystawców, katalog z ofertą rekrutacyjną, harmonogram wydarzeń." },
            { property: "og:image", content: "og.png" },
            { property: "og:url", content: "https://targi.agh.edu.pl/" },
        ],
        link: [
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            { href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap", rel: "stylesheet" },
            // icons
            {
                rel: 'stylesheet',
                type: 'text/css',
                href:
                    'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
            },
            // favicons (rfg)
            { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
            { rel: "manifest", href: "/favicon/site.webmanifest" },
            { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
            { rel: "shortcut icon", href: "/favicon/favicon.ico" },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~assets/global.sass"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/breakpoints",
        "@/plugins/mixins",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/gtm',
        '@nuxtjs/axios',
        "nuxt-material-design-icons",
        [
            "nuxt-breakpoints",
            {
                breakpoints: {
                    // default options
                    sm: 600,
                    md: 960,
                    lg: 1264,
                    xl: 1904,
                    options: {
                        polyfill: true,
                        throttle: 200
                    }
                }
            }
        ]
    ],

    gtm: {
        id: 'GTM-P4SQJM5'
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#479665', // zielony
                    secondary: '#FDC139', // zloty
                    accent: '#edf4f0', // zielony
                    accent2: '#fff9eb', // slomkowy
                    'agh-grey': '#fafafa', // szary
                    'almost-black': '#4C5562', // uzywany do jasniejszych tekstow
                    'default-black': '#1a1a1a',
                    'always-black': '#1a1a1a',
                    // white: '#fff'
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
                dark: {
                    primary: '#479665', // zielony
                    secondary: '#FDC139', // zloty
                    accent: '#333333', // zielony
                    accent2: '#333333', // slomkowy
                    'agh-grey': '#1a1a1a', // szary
                    'almost-black': '#fff', // uzywany do jasniejszych tekstow
                    'default-black': '#fff',
                    'always-black': '#1a1a1a',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                }
            }
        },
        options: {
            customProperties: true
        },
        defaultAssets: {
            icons: false
        },
    },

    /*
     ** Development server
     */
    server: {
        port: 3000, // default: 3000
        host: "0.0.0.0" // default: localhost
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
    generate: {
        // routes: process.env.PROD === 'prod' ? JSON.parse(process.env.ROUTES) : []
    }
}
