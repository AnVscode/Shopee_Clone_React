import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'

import Input from 'src/components/Input'
import { registerAccount } from 'src/types/api/auth.api'
import { isAxiosUnprocessableEntityErr } from 'src/utils/isAxiosErr'
import { ResApi } from 'src/types/utils.type'
import { FormData, schema } from './validate/schema'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log('success', data)
      },

      onError: (error) => {
        if (isAxiosUnprocessableEntityErr<ResApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formErr = error.response?.data.data

          if (formErr) {
            Object.keys(formErr).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                type: 'validate',
                message: formErr[key as keyof Omit<FormData, 'confirm_password'>]
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-20 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                className='mt-8'
                type='email'
                name='email'
                placeholder='Email'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='password'
                placeholder='Mật khẩu'
                autoComplete='on'
                register={register}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='confirm_password'
                placeholder='Xác nhận Mật khẩu'
                autoComplete='on'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-2'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-300'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='text-red-400 ml-1'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
