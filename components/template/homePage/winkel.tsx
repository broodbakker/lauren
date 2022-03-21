import React from 'react'
//components
import { Home_products } from "../../organism/products"
import { Box } from "grommet"
//atoms
import Title from "../../atom/type/title"

const Winkel = () =>
  <Box margin={{ vertical: "small" }}>
    <Box margin="small">
      <Title name="Mijn Winkeltje 🎁" size="medium" />
    </Box>
    <Home_products />
  </Box >



export default Winkel