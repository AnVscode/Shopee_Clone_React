import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import Input from 'src/components/Input'
import { loginAccount } from 'src/types/api/auth.api'
import { isAxiosUnprocessableEntityErr } from 'src/utils/isAxiosErr'
import { ResApi } from 'src/types/utils.type'
import { FormData, schema } from './validate/schema'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log('success', data)
      },

      onError: (error) => {
        if (isAxiosUnprocessableEntityErr<ResApi<FormData>>(error)) {
          const formErr = error.response?.data.data

          if (formErr) {
            Object.keys(formErr).forEach((key) => {
              setError(key as keyof FormData, {
                type: 'validate',
                message: formErr[key as keyof FormData]
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
              <div className='text-2xl'>Đăng nhập</div>
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
              <div className='mt-2'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='text-red-400 ml-1'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
