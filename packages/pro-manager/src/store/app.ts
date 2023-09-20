// Utilities
import { defineStore } from 'pinia'

// composables
import { useLocalStorage } from '@vueuse/core'


export const useAppStore = defineStore('app', {
  state: () => ({
    isDark: useLocalStorage('isDark', true),
    drawer: useLocalStorage('drawer', true),
    rail: useLocalStorage('rail', false),
  }),
})
