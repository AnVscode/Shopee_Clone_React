import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import ChevronUp from './svg/chevronUp'
import GlobeAlt from './svg/globeAlt'
import Logo from './svg/logo'
import MagnifyingGlass from './svg/magnifyingGlass'
import ShoppingCart from './svg/shoppingCart'
import Popover from '../Popover'
import { logoutAccount } from 'src/types/api/auth.api'
import { AppContext } from 'src/contexts/app.context'
import path from 'src/constants/path'

export default function Header() {
  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)

  const logoutAccountMutation = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutAccountMutation.mutate()
  }

  return (
    <div className='pb-5 pt-2 bg-[linear-gradient(-180deg,#f53d2d,#f63)] text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border-gray-200 cursor-pointer'>
                <div className='flex flex-col py-2 px-3 pr-28 pl-3'>
                  <button className='py-2 px-3 hover:text-orange text-left'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange mt-2 text-left'>English</button>
                </div>
              </div>
            }
          >
            <div className='flex items-center py-1 hover:text-white/70 cursor-pointer'>
              <GlobeAlt />
              <span className='mx-1'>Tiếng việt</span>
              <ChevronUp />
            </div>
          </Popover>

          {isAuthenticated && (
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border-gray-200'>
                  <Link
                    to={path.profile}
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to={path.home}
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                  >
                    Đơn mua
                  </Link>
                  <button
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='flex items-center py-1 hover:text-white/70 cursor-pointer ml-6'>
                <div className='w-6 h-6 mr-2 flex-shrink-0'>
                  <img
                    src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png'
                    alt='avatar'
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                <div className='text-white'>{profile?.email}</div>
              </div>
            </Popover>
          )}

          {!isAuthenticated && (
            <div className='flex items-center'>
              <Link to={path.register} className='mx-3 capitalize hover:text-white/70'>
                Đăng ký
              </Link>
              <div className='border-r-[1px] border-r-white/40 h-4'></div>
              <Link to={path.login} className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          )}
        </div>

        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to={path.home} className='col-span-2'>
            <Logo />
          </Link>

          <form className='col-span-9' noValidate>
            <div className='bg-white rounded-sm p-1 flex'>
              <input
                type='text'
                name='search'
                placeholder='Tìm kiếm sản phẩm'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
              />
              <button className='rounded-sm py-2 px-6 flex-shrink-0 bg-orange hover:opacity-90'>
                <MagnifyingGlass />
              </button>
            </div>
          </form>

          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border-gray-200 max-w-[400px] text-sm'>
                  <div className='p-2'>
                    <div className='text-gray-400 capitalize mb-5'>Sản phẩm mới thêm</div>

                    {Array.from({ length: 5 }).map((_, index) => (
                      <div className='hover:bg-gray-100 px-2 py-2' key={index}>
                        <div className='mt-4 flex'>
                          <div className='flex-shrink-0'>
                            <img
                              src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png'
                              alt='img_cart'
                              className='w-11 h-11 object-cover'
                            />
                          </div>
                          <div className='flex-grow ml-2 overflow-hidden'>
                            <div className='truncate'>
                              Sản phẩm mới thêm Sản phẩm mới thêm Sản phẩm mới thêm Sản phẩm mới thêm Sản phẩm mới thêm
                            </div>
                          </div>

                          <div className='ml-2 flex-shrink-0'>
                            <span className='text-orange'>đ000.000</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className='flex mt-6 items-center justify-between'>
                      <div className='capitalize text-xs text-gray-500'>Thêm vào giỏ hàng</div>
                      <button className='capitalize bg-orange hover:bg-opacity-80 px-4 py-2 rounded-sm text-white'>
                        Thêm Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              }
            >
              <Link to={path.home}>
                <ShoppingCart />
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
