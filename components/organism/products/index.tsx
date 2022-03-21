import React, { FunctionComponent } from 'react';
//state
import { Logic, WinkelLogic } from './logic'
//component
import Products from "./home_product/products"
import WinkelProducts from "./winkelPage_product/products"

type ProductProps = {
}

const Home_products: FunctionComponent<ProductProps> = ({ }) => {
  const productsData = Logic()

  return <Products productsData={productsData} />
}

const Winkel_products: FunctionComponent<ProductProps> = ({ }) => {
  const productsData = WinkelLogic()

  return <WinkelProducts productsData={productsData} />
}

export { Home_products, Winkel_products }