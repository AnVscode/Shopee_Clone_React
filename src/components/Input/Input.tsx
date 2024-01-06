/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  className?: string
  type: React.HTMLInputTypeAttribute
  name: string
  placeholder?: string
  autoComplete?: string
  errorMessage?: string
  register: UseFormRegister<any>
  rulus?: RegisterOptions
}

export default function Input({
  className,
  type,
  name,
  placeholder,
  autoComplete,
  errorMessage,
  register,
  rulus
}: InputProps) {
  return (
    <div className={className}>
      <input
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name, rulus)}
      />
      {/* show errorMessage  */}
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
