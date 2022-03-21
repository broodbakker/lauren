import React from 'react'
//components
import { Winkel_products } from "../../organism/products"
import { Box } from "grommet"
//atoms
import Title from "../../atom/type/title"
import Select from "../../atom/inputText/select"

const Winkel = () =>
  <Box margin={{ vertical: "small" }}>

    <Box margin="small">
      <Select />
    </Box>

    <Box margin="small">
      <Title name="Mijn Winkeltje 🎁" size="medium" />
    </Box>
    <Winkel_products />
  </Box >




export default Winkel