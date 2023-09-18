import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: "Geekfolio",
      htmlAttrs: {
        lang: 'en'
      },
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        {
          "http-equiv": 'X-UA-Compatible', content: "IE=edge"
        },
        {
          name: 'keywords',
          content: 'Vue Nuxtjs Template Geekfolio Multi-Purpose themeforest'
        },
        {
          name: 'description',
          content: 'Geekfolio - Multi-Purpose Vue Nuxtjs Template'
        },
        {
          name: 'author',
          content: 'themescamp'
        }
      ],
      "link": [
        { rel: 'shortcut icon', href: '/dark/assets/imgs/favicon.ico' },
        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Epilogue:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap' },
        // Bootstrap Icons
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' },
        // CSS
        { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
        { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
      ],
      "script": [
        { src: '/assets/js/plugins.js' },
        { src: '/assets/js/TweenMax.min.js' },
        { src: '/assets/js/charming.min.js' },
        { src: '/assets/js/countdown.js' },
        { src: '/assets/js/ScrollTrigger.min.js' },
        { src: '/assets/js/gsap.min.js' },
        { src: '/assets/js/splitting.min.js' },
        { src: '/assets/js/isotope.pkgd.min.js' },
        { src: '/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/assets/js/ScrollSmoother.min.js' },
        { src: '/showcase/assets/js/anime.min.js' },
        { src: '/assets/js/scripts.js', defer: true },
      ]
    }
  },
  css: [
    'swiper/css/bundle',
    '@/styles/modal-video.css',
    '@/styles/globals.css'
  ],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true
      }
    }
  }
})
