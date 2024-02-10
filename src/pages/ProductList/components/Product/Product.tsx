import { Link } from 'react-router-dom'

import { imageDemo } from 'src/constants/demoLink'
import path from 'src/constants/path'
import StarIcon from '../../svg/star'

export default function Product() {
  return (
    <Link to={path.home}>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.04rem] hover:shadow-md duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative'>
          <img
            src={imageDemo.url}
            alt={imageDemo.alt}
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>

        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque sint ratione earum ullam repellat sunt
            eum iste illo harum quis nam, voluptates sed ipsam ex accusamus in magnam nisi. Minus illo dolorem deleniti
            qui optio architecto ipsum explicabo neque voluptatem rem consectetur non expedita eum sapiente, dignissimos
            nulla tempora. Cumque ipsum sapiente hic maxime fugit dolorum ut ea dignissimos. Eius repellat ratione ipsam
            saepe autem placeat, fugit totam sint nesciunt accusantium reprehenderit aspernatur, rem, nulla perspiciatis
            delectus repellendus! Delectus modi et impedit accusamus, rem voluptatem doloremque recusandae sint ipsam!
          </div>

          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>đ</span>
              <span>0.00</span>
            </div>

            <div className='text-orange truncate ml-1'>
              <span className='text-xs'>đ</span>
              <span>0.00</span>
            </div>
          </div>

          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <StarIcon full className='w-3 h-3 fill-yellow-300 text-yellow-300' />
                </div>

                <StarIcon className='w-3 h-3 fill-current text-gray-300' />
              </div>
            </div>

            <div className='ml-2 text-sm'>
              <span>0.00k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
