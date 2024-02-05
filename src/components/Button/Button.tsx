import { ButtonHTMLAttributes } from 'react'
import LoadingSVG from './svg/loading'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
}

export default function Button(props: ButtonProps) {
  const { isLoading, className, disabled, children, ...rest } = props

  // const newClassName = disabled ? `${className} bg-gray-300 cursor-not-allowed` : className

  const newClassName = disabled ? className + ' cursor-not-allowed' : className

  return (
    <button className={newClassName} disabled={disabled} {...rest}>
      {isLoading && <LoadingSVG />}
      <span>{children}</span>

      {/* {!isLoading && <span>{children}</span>} */}
    </button>
  )
}
