// Utilities
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '',
    refreshToken: '',
    currentUser: null,
    rememberMe: false,
    returnUrl: null,
  }),
  getters: {
    isAuthenticated: (state) => state.currentUser !== null
  }
})
