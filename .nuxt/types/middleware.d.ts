import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/linhankuan/Main_Files拷貝/geekfolio_nuxtjs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}