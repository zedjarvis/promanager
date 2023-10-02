import { User } from "@/utils/types"


export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),
  getters: {},
  actions: {
    async getUsers() {
      await fetch("/api/users")
        .then((res) => res.json())
        .then((json) => {
          this.users = json.users
        })
    }
  },
  persist: {
    storage: localStorage
  }
})
