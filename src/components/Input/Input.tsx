/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string
  classNameError?: string
  errorMessage?: string
  register?: UseFormRegister<any>
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
  rulus,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm'
}: InputProps) {
  const registerResult = register && name ? register(name, rulus) : {}

  return (
    <div className={className}>
      <input
        className={classNameInput}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...registerResult}
      />
      {/* show errorMessage  */}
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
