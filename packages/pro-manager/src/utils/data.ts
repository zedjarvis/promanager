import type { Project, Task, User } from "./types";
export const Users: User[] = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'doejohn@example.com',
    avatar: '/src/assets/images/007.png',
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janedoe@example.com',
    avatar: '/src/assets/images/010.png',
  },
  {
    id: 3,
    first_name: 'Jenny',
    last_name: 'Sulivan',
    email: 'jenny@example.com',
    avatar: '/src/assets/images/005.png',
  },
  {
    id: 4,
    first_name: 'Robert',
    last_name: 'Downy Jr',
    email: 'downy@stark.industries',
    avatar: '/src/assets/images/001.png',
  },
  {
    id: 5,
    first_name: 'Tariq',
    last_name: 'St. Patrick',
    email: 'tpatrick@ghost.com',
    avatar: '/src/assets/images/003.png',
  },
]

export const Tasks: Task[] = [
  {
    id: 1,
    name: 'Document Review',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 2,
    name: 'Bid Date',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 3,
    name: 'Award Date',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 4,
    name: 'Start Design Work',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 5,
    name: 'Complete Design Work',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 6,
    name: 'Construction Start Date',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
  {
    id: 7,
    name: 'Site Work',
    done: false,
    status: 'To Do',
    priority: 'MEDIUM',
    percentage: '0%',
    users: [],
  },
]


export const Projects: Project[] = [
  {
    id: 1,
    name: 'CONSTRUCTION PROJECT',
    desc: 'A Construction Project...',
    status: 'IN PROGRESS',
    priority: 'CRITICAL',
  },
  {
    id: 2,
    name: 'NEW PROJECT',
    desc: 'New testing project...',
    status: 'NEW',
    priority: 'MEDIUM',
  },
]
