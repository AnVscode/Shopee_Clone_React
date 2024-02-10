import ArrowIcon from '../../svg/arrow'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center'>
            Phổ biến
          </button>

          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100/80 text-center'>
            Mới nhất
          </button>

          <button className='h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100/80 text-center'>
            Bán chạy
          </button>

          <select className='h-8 px-4 capitalize bg-white hover:bg-slate-100 text-black text-left cursor-pointer outline-none'>
            <option value='price:asc' defaultChecked>
              Giá: Thấp đến cao
            </option>

            <option value='price:desc'>Giá: Cao đến thấp</option>
          </select>
        </div>

        <div className='flex items-center'>
          <span className='text-orange'>1</span>
          <span>/</span>
          <span>2</span>

          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow'>
              <ArrowIcon position='left' />
            </button>
            <button className='shadow px-3 h-8 rounded-tl-sm rounded-br-sm bg-white hover:bg-slate-100'>
              <ArrowIcon position='right' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
