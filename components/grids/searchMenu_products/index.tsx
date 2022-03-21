import React from 'react';
import { Grid } from "grommet"
//molecule
import Product from "../../organism/products/searchMenu_product"

const Products = () => {
  return (
    <Grid
      rows={['auto', "auto", "auto"]}
      columns={['1/2', '1/2']}
      margin="small"
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid>
  )
}

export default Products