// Plugins
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import VueRouter from 'unplugin-vue-router/vite'
import MetaLayouts from "vite-plugin-vue-meta-layouts"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue({
      template: { transformAssetUrls }
    }),
    UnoCSS({}),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
      ]
    }),
    Components({
      dts: true
    }),
    MetaLayouts({}),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('/src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('/src/components', import.meta.url)),
      '@styles': fileURLToPath(new URL('/src/assets/styles', import.meta.url)),
      '@store': fileURLToPath(new URL('/src/store', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3003,
  },
})
