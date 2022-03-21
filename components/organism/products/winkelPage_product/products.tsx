import React from 'react'
import { Product } from "../../../../typescript"
import { Box, InfiniteScroll, Text } from "grommet"
//components
import View from "../standardView"
import ResponsiveGrid from "../../../../shared/grid/responsiveGrid"
type WinkelProductsProps = {
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
const WinkelProducts = (props: WinkelProductsProps) =>
  <ResponsiveGrid
    responsive={true}
    rows={rows}
    columns={columns}
  >
    <InfiniteScroll
      items={props.productsData}
      step={3}
    >
      {(product, index) => <View productData={product} key={index} />}
    </InfiniteScroll>


  </ResponsiveGrid>


export default WinkelProducts