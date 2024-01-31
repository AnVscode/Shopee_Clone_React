import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required('Email không được để trống')
      .min(5, 'Email phải có ít nhất 5 ký tự')
      .max(160, 'Độ dài tối đa là 160 ký tự')
      .max(160, 'Độ dài tối đa là 160 ký tự'),

    password: yup
      .string()
      .required('Mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(160, 'Mật khẩu tối đa 160 ký tự')
  })
  .required()

export type FormData = yup.InferType<typeof schema>
