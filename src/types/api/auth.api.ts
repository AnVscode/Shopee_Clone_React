import http from 'src/utils/http'
import { AuthRes } from '../auth.type'

export const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthRes>('/register', body)
  },

  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthRes>('/login', body)
  },

  logoutAccount() {
    return http.post('/logout')
  }
}
