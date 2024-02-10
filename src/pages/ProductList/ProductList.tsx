import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'

export default function ProductList() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          {/* AsideFilter */}
          <div className='col-span-3'>
            <AsideFilter />
          </div>

          {/* SortProductList */}
          <div className='col-span-9'>
            <SortProductList />

            {/* items */}
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {/* product items */}
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='col-span-1'>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
