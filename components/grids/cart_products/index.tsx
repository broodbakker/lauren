import React from 'react';
//components
import { Grid } from "grommet"
//organism
import Product from "../../organism/products/cart_product"

const amountOfCartItems = [0, 1, 2, 3, 4, 5]

const Products = () => {
  return (
    <Grid
      rows={['auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
      columns={['1/1']}
      margin="small"
    >
      {amountOfCartItems.map((item, index) => <Product key={index} />)}
    </Grid>
  )
}

export default Products

