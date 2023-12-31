/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-09 11:09:55
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-07 16:24:39
 * @Description:
 */
// https://nuxt.com/docs/api/configuration/nuxt-config

// import i18n from "@/plugins/i18n";
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '新乡祥和康复医院',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // <meta name="description" content="My amazing site">
        // { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ],
      script: [
        {
          src: '//at.alicdn.com/t/c/font_3750947_ev93ymwyaxt.js',
          type: 'text/javascript'
        }
      ]
    }
  },

  modules: [
    '@element-plus/nuxt',
    // https://nuxt.com/modules/swiper
    'nuxt-swiper',
    // 图标库：https://icones.js.org
    // 使用    <Icon name="uil:github" />
    // 'nuxt-icon',
    // https://v8.i18n.nuxtjs.org/getting-started/setup
    // ["@nuxtjs/i18n", i18n], 暂时还没完善
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia(), storeToRefs()`
          'defineStore',
          'storeToRefs'
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          // ['defineStore', 'definePiniaStore']
        ]
      }
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  // elementPlus: {},
  elementPlus: {
    icon: 'ElIcon',
    // importStyle: 'scss',
    themes: ['dark']
  },
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true
  },
  // colorMode
  colorMode: {
    classSuffix: ''
  },
  // i18n: {
  //   locales: ["en", "zh"], // used in URL path prefix
  //   defaultLocale: "zh", // default locale of your project for Nuxt pages and routings
  //   vueI18n: {
  //     legacy: false,
  //     locale: "zh",
  //     messages: {
  //       en,
  //       zh: zhCn,
  //     },
  //   },
  // },
  // css: ['@/assets/css/base.css'],
  // css: [],
  // css
  // '@/assets/scss/theme.scss',
  // '@/assets/scss/mixins.scss',
  css: ['@/assets/css/base.css', 'animate.css/animate.css', 'animate.css/animate.compat.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";',
          // additionalData: `@use "@/assets/scss/element/index.scss" as element;`
        }
      }
    }
  },
  devtools: { enabled: true },
  // http
  nitro: {
    devProxy: {
      '/test-api': {
        target: 'https://mock.apifox.cn/m1/2517212-0-default/',
        prependPath: true,
        changeOrigin: true
      },
      '/prod-api': {
        target: 'https://go.ixuelei.com/',
        prependPath: true,
        changeOrigin: true
      }
    }
  },
  build: {
    transpile: ['swiper']
  },
  // 设置 typescript.typeCheck: true 来让开发时期能执行类型检查。
  typescript: {
    typeCheck: true
    // strict: true,
    // shim: false,
  }
})
