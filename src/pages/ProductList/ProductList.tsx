import { useQuery } from '@tanstack/react-query'

import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import useQueryParams from 'src/hooks/useQueryParams'
import { productApi } from 'src/types/api/product.api'

export default function ProductList() {
  const queryParams = useQueryParams()

  const { data } = useQuery({
    queryKey: ['product', queryParams],
    queryFn: () => {
      return productApi.getProduct(queryParams)
    }
  })

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
              {data &&
                data?.data.data.products.map((product) => (
                  <div key={product._id} className='col-span-1'>
                    <Product product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
