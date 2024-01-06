/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống'
    },

    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },

    minLength: {
      value: 5,
      message: 'Email phải có ít nhất 5 ký tự'
    },

    maxLength: {
      value: 160,
      message: 'Độ dài tối đa là 160 ký tự'
    }
  },

  password: {
    required: {
      value: true,
      message: 'Mật khẩu không được để trống'
    },

    minLength: {
      value: 6,
      message: 'Mật khẩu phải có ít nhất 6 ký tự'
    },

    maxLength: {
      value: 160,
      message: 'Mật khẩu tối đa 160 ký tự'
    }
  },

  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu không được để trống'
    },

    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu phải có ít nhất 6 ký tự'
    },

    maxLength: {
      value: 160,
      message: 'Nhập lại mật tối đa 160 ký tự'
    },

    validate: typeof getValues === 'function' ? (v) => v === getValues('password') || 'Mật khẩu không khớp' : undefined
  }
})
