import { Task } from '@/utils/types'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    currentTask: {} as Task,
    showTask: false
  }),
  actions: {
    async getTasks() {
      await fetch("/api/tasks")
        .then((res) => res.json())
        .then((json) => {
          this.tasks = json.tasks
        })
    }
  },
  persist: {
    storage: localStorage
  }
})
