import { axiosPrivate } from '@/plugins/axios'
import type { UserNotification } from '@/utils/types'
import { defineStore } from 'pinia'


export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as UserNotification[]
  }),
  getters: {
    unread: (state) => state.notifications.filter((notification) => notification.unread == true),
  },
  actions: {
    async get() {
      await axiosPrivate.get('/notifications/me/').
      then((response) => this.notifications = response.data).
      catch((error) => console.log(error))
    }
  },
  persist: {
    storage: localStorage
  }
})
