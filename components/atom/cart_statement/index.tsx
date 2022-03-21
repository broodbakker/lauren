import React, { FunctionComponent } from 'react';
import styled from "styled-components"
//components
import { Box } from "grommet"
//atom
import Title from "../type/title"

type InsideCartProps = {
}
const Cart_statement: FunctionComponent<InsideCartProps> = () => {
  return (
    <Box margin={{ horizontal: "small" }} height={{ min: "xsmall" }}>
      <Box background="secondary" pad="small" border={{ color: 'primary', size: 'small', side: "horizontal" }} margin={{ horizontal: "small" }} align="center">
        <Title name="Geen Verzendkosten" size="small" />
      </Box>
    </Box>
  )
}

export default Cart_statement


