export type ID = string | number | null
export type Status = 'NEW' | 'IN PROGRESS' | 'ON HOLD' | 'COMPLETE' | 'CANCELED'
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | 'NONE'

export interface LoginPayload {
  email: string
  password: string
}
export interface User {
  id: ID
  email: string
  first_name: string
  last_name: string
  avatar: string
  tasks?: Task[]
}

export interface Profile {
  id: ID
  phone_number?: string
  address?: string
  avatar?: string
}

export interface UserNotification {
  id: ID
  verb: string
  description: string | null
  level: "success" | "info" | "warning" | "error"
  unread: boolean
  timestamp: string
  data: any
  actor: User | null
}

export interface Project {
  id: ID
  name: string
  desc?: string
  target_date?: Date
  working_days?: string[]
  manager?: User
  tasks?: Task[]
  lead?: Lead
  status: Status
  priority?: Priority
  default_rate?: string
  budget?: string
}

export interface Lead {
  id: ID
  title: string
  email: string
  phone: string
}

export interface Task {
  id: ID
  done: boolean
  name: string
  desc?: string
  start_date?: Date
  end_date?: Date
  users: User[]
  percentage?: string
  status?: 'To Do' | 'Doing' | 'Done'
  priority?: Priority
  project?: Project
}
