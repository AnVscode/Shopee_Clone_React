/* eslint-disable @typescript-eslint/no-explicit-any */
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
      .max(160, 'Mật khẩu tối đa 160 ký tự'),

    confirm_password: yup
      .string()
      .required('Nhập lại mật khẩu không được để trống')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(160, 'Mật khẩu tối đa 160 ký tự')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
  })
  .required()

export type FormData = yup.InferType<typeof schema>
