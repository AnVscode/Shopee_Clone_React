/* eslint-disable import/no-named-as-default-member */
import axios, { AxiosError, HttpStatusCode } from 'axios'

export function isAxiosErr<T>(err: unknown): err is AxiosError<T> {
  return axios.isAxiosError(err)
}

export function isAxiosUnprocessableEntityErr<FormErr>(err: unknown): err is AxiosError<FormErr> {
  return isAxiosErr(err) && err.response?.status === HttpStatusCode.UnprocessableEntity
}
