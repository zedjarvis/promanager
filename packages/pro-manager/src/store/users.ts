// Utilities
import { defineStore } from 'pinia'

// composables
import { useLocalStorage } from '@vueuse/core'


export const useUsersStore = defineStore('users', {
  state: () => ({
    users: useLocalStorage('users', []),
  }),
  getters: {
    getCurrentUser: (state) => {
      state.users.map((user) => {
        // @ts-ignore
        if (user.id === state.currentUserId) return user
        return null
      })
    }
  }
})
