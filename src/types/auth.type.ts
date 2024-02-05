import { User } from './user.type'
import { SuccessResApi } from './utils.type'

export type AuthRes = SuccessResApi<{
  access_token: string
  expires: string
  user: User
}>
