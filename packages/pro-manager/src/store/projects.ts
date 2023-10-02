import { Project } from '@/utils/types'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
  }),
  actions: {
    async getProjects() {
      await fetch("/api/projects")
        .then((res) => res.json())
        .then((json) => {
          this.projects = json.projects
        })
    }
  },
  persist: {
    storage: localStorage
  }
})
