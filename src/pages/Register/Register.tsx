import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { getRules } from 'src/utils/rules'
import Input from 'src/components/Input'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    () => {},
    () => {
      const password = getValues('password')
      console.log(password)
    }
  )

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
                rulus={rules.email}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='password'
                placeholder='Mật khẩu'
                autoComplete='on'
                register={register}
                rulus={rules.password}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='confirm_password'
                placeholder='Xác nhận Mật khẩu'
                autoComplete='on'
                register={register}
                rulus={rules.confirm_password}
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
