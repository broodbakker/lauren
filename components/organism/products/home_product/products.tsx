import React from 'react'
import { Product } from "../../../../typescript"
//components
import View from "../standardView"
import ResponsiveGrid from "../../../../shared/grid/responsiveGrid"
type HomeProductsProps = {
  productsData: Product[]
}

const columns = {
  small: ['auto', 'auto'],
  medium: ['auto', "auto", "auto"],
  large: ['flex', "flex", "flex", "flex"],
};

const rows = {
  small: ['auto', 'auto', 'auto', 'auto',],
  medium: ['auto', 'auto', 'auto'],
  large: ['auto', "auto"],
};
const HomeProducts = (props: HomeProductsProps) =>
  <ResponsiveGrid
    responsive={true}
    rows={rows}
    columns={columns}
  >
    {props.productsData.map((product, index) => <View productData={product} key={index} />)}
  </ResponsiveGrid>


export default HomeProducts