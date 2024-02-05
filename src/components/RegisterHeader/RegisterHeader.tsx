import { Link, useMatch } from 'react-router-dom'

import Logo from './svg/logo'
import path from 'src/constants/path'

export default function RegisterHeader() {
  const registeMatch = useMatch(path.register)

  const isRegister = Boolean(registeMatch)

  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-end'>
          <Link to={path.home}>
            <Logo />
          </Link>

          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}
