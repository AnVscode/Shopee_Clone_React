export interface SuccessResApi<Data> {
  message: string
  data: Data
}

export interface ErrResApi<Data> {
  message: string
  data?: Data
}
