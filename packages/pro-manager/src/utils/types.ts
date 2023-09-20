export type ID = number | null

export interface User {
  id: ID
  email: string
  first_name?: string
  last_name?: string
  created_by?: string | null
  profile?: Profile
}

export interface Profile {
  id: ID
  phone_number?: string
  address?: string
  avatar?: string
}

export interface Notification {
  id: ID,
}
