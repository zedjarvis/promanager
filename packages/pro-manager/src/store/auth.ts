// Utilities
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants'
import { axiosPrivate, axiosPublic } from '@/plugins/axios'
import router from '@/router'
import type { LoginPayload, User } from '@/utils/types'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: useLocalStorage(ACCESS_TOKEN, ''),
    refreshToken: useLocalStorage(REFRESH_TOKEN, ''),
    currentUser: null as User | null,
    returnUrl: '',
    isLoading: false,
    hasError: false,
    status: null as number | null,
    Msg: '',
  }),
  getters: {
    isAuthenticated: (state) => state.currentUser !== null,
    getCurrentUserFullName: (state) => {
      return state.currentUser?.first_name ? state.currentUser.first_name + ' ' + state.currentUser.last_name : state.currentUser?.email
    }
  },
  actions: {
    async register(payload: LoginPayload) {
      this.isLoading = true
      await axiosPublic.post('/users/', payload).
        then((response) => {
          this.isLoading = false
          console.log(response)
        }).catch((error) => {
          this.isLoading = false
          this.hasError = true
          if (error.response) this.Msg = error.response.data.email[0]
          else this.Msg = error.message
        })
    },

    async login(payload: LoginPayload) {
      this.isLoading = true
      await axiosPublic.post('/jwt/create/', payload).
        then((response) => {
          const { access, refresh } = response.data;
          this.accessToken = access
          this.refreshToken = refresh
        }).catch((error) => {
          this.isLoading = false
          this.hasError = true
          if (error.response) this.Msg = error.response.data.detail
          else this.Msg = error.message
        })
      if (this.accessToken)
        await axiosPublic.get('/users/me/', { headers: { 'Authorization': `Bearer ${this.accessToken}` } })
          .then((response) => {
            this.currentUser = response.data;
            this.isLoading = false
          }).catch((error) => {
            this.isLoading = false
            this.hasError = true
            if (error.response) this.Msg = error.response.data.detail
            else this.Msg = error.message
          })

      await router.push(this.returnUrl ? this.returnUrl : '/')
    },

    async logout() {
      await axiosPrivate.post('/auth/jwt/destroy/', { refresh: this.refreshToken }).
        then((response) => this.status = response.status).
        catch((error) => console.log(error))
      this.currentUser = null
      this.accessToken = ''
      this.refreshToken = ''

      localStorage.removeItem(ACCESS_TOKEN)
      localStorage.removeItem(REFRESH_TOKEN)
      // save current route path
      this.returnUrl = location.pathname
      await router.push('/auth/login')
    }
  },
  persist: {
    storage: localStorage,
    paths: ['currentUser', 'returnUrl']
  }
})
