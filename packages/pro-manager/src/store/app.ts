// Utilities
import { CURRENT_PATH, HOME_DEFAULT_PATH } from '@/constants'
import { defineStore } from 'pinia'

// composables
import { useLocalStorage } from '@vueuse/core'


export const useAppStore = defineStore('app', {
  state: () => ({
    online: false,
    isDark: useLocalStorage('isDark', true),
    drawer: useLocalStorage('drawer', true),
    rail: useLocalStorage('rail', false),
    current_path: useLocalStorage(CURRENT_PATH, HOME_DEFAULT_PATH)
  }),
})
