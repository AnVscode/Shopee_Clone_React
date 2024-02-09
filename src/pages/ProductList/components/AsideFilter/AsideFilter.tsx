import { Link } from 'react-router-dom'

import path from 'src/constants/path'
import MenuIcon from '../../svg/menu'
import SelectIcon from '../../svg/select'
import FilterIcon from '../../svg/filter'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import StarIcon from '../../svg/star'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center font-bold'>
        <MenuIcon />
        Tất cả danh mục
      </Link>

      {/* divider */}
      <div className='bg-gray-300 h-[1px] my-4' />

      <ul>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-orange font-semibold'>
            <SelectIcon />
            Thời trang nam
          </Link>
        </li>

        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2'>
            Điện thoại
          </Link>
        </li>
      </ul>

      {/* filter */}
      <Link to={path.home} className='flex items-center font-bold mt-4 uppercase'>
        <FilterIcon />
        Bộ lọc tìm kiếm
      </Link>

      {/* divider */}
      <div className='bg-gray-300 h-[1px] my-4' />

      {/* khoảng giá */}
      <div className='my-5'>
        <div>Khoảng giá</div>

        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              type='text'
              className='grow'
              name='from'
              placeholder='đ Từ'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />

            {/* divider */}
            <div className='mx-2 mt-2 shrink-0'>-</div>

            <Input
              type='text'
              className='grow'
              name='from'
              placeholder='đ Đến'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>

          <Button
            className='w-full py-2 p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'
            isLoading={false}
          >
            Áp dụng
          </Button>
        </form>
      </div>

      {/* divider */}
      <div className='bg-gray-300 h-[1px] my-4' />

      {/* đánh giá */}
      <div className='text-sm'>Đánh giá</div>

      <ul className='my-3'>
        <li className='py-1 pl-2'>
          <Link to={path.home} className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <StarIcon full />
                </div>
              ))}
            <span className='ml-2'>Trở lên</span>
          </Link>
        </li>

        <li className='py-1 pl-2'>
          <Link to={path.home} className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <StarIcon />
                </div>
              ))}
            <span className='ml-2'>Trở lên</span>
          </Link>
        </li>
      </ul>

      {/* divider */}
      <div className='bg-gray-300 h-[1px] my-4' />

      <Button
        className='w-full py-2 px-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 flex justify-center items-center'
        isLoading={false}
      >
        Xóa tất cả
      </Button>
    </div>
  )
}
