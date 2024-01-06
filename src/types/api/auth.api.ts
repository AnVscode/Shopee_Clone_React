import http from 'src/utils/http'
import { AuthRes } from '../auth.type'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthRes>('/register', body)
