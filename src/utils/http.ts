import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { AuthRes } from 'src/types/auth.type'
import {
  clearLocalStorage,
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileLocalStorage
} from './auth'
import path from 'src/constants/path'

class Http {
  instance: AxiosInstance
  private acessToken: string

  constructor() {
    this.acessToken = getAccessTokenFromLocalStorage()

    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.acessToken && config.headers) {
          config.headers.authorization = this.acessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          const data = response.data as AuthRes
          this.acessToken = data.data.access_token
          setAccessTokenToLocalStorage(this.acessToken)
          setProfileLocalStorage(data.data.user)
        } else if (url === '/logout') {
          this.acessToken = ''
          clearLocalStorage()
        }

        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          console.log(HttpStatusCode.UnprocessableEntity)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }

        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
