import http from 'src/utils/http'

import { Product, ProductList, ProductListConfig } from '../product.type'
import { SuccessResApi } from '../utils.type'

const URL = 'products'

export const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get<SuccessResApi<ProductList>>(URL, { params })
  },

  getProductDetail(id: string) {
    return http.get<SuccessResApi<Product>>(`${URL}/${id}`)
  }
}
