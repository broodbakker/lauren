import * as React from 'react'
import { Product } from "../typescript"

const ProductStateContext = React.createContext
  <Product[] | undefined>(undefined)

function useProduct() {
  const context = React.useContext(ProductStateContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within a useProductProvider')
  }
  return context
}

type useProductProviderProps = { children: React.ReactNode, products: Product[] }

function UseProductProvider({ children, products }: useProductProviderProps) {
  return (
    <ProductStateContext.Provider value={products}>
      {children}
    </ProductStateContext.Provider>
  )
}

export { UseProductProvider, useProduct }