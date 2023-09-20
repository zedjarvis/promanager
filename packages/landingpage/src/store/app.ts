// Utilities
import { defineStore } from 'pinia'

export interface appState {
  drawer: boolean | null
  dark: boolean
}

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: null,
    dark: true,
  }),
})
