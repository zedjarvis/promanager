import type { Project } from "./types";

import { ref } from "vue";

export const Projects = ref<Project[]>([
  {
    id: 1,
    name: 'CONSTRUCTION PROJECT',
    desc: 'A Construction Project...',
    target_date: new Date(),
    working_days: ['mon', 'tue', 'wed', 'thur', 'fri'],
    status: 'NEW',
    priority: 'CRITICAL'
  }
])
