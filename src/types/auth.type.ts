import { User } from './user.type'
import { ResApi } from './utils.type'

export type AuthRes = ResApi<{
  access_token: string
  expires: string
  user: User
}>
