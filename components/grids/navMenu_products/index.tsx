import React from 'react';
import { Grid } from "grommet"
//molecule
import Product from "../../organism/products/navMenu_product"

const Products = () => {
  return (
    <Grid
      columns={['1/1']}
      gap="xsmall"
    >
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid>
  )
}

export default Products