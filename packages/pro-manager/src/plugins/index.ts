/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue'
import router from '../router'
import pinia from './pinia'
// import { loadFonts } from './webfontloader'
import seoHead from './unhead'
import vuetify from './vuetify'

export function registerPlugins(app: App) {
  // loadFonts() # uncomment to load fonts
  app
    .use(vuetify)
    .use(router)
    .use(seoHead)
    .use(pinia)
}
