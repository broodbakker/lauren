import React from 'react'
import styled from "styled-components"
//atom
import { CartIcon } from "../../../atom/navbar_cart"
import Text from "../../../atom/type/title/text"

import { Box } from "grommet"

const CursorBox = styled(Box)`
  cursor:pointer;
  border-radius:0px 0px 20px 20px;
`

const className = "snipcart-checkout"

const Cart = () => {
  return (
    <CursorBox background="primary" direction="row" pad={{ horizontal: "xsmall" }}
      justify="start" className={className} >
      <Box margin={{ right: "small" }} alignSelf="center">
        <Text light weight="bold">Cart</Text>
      </Box>
      <CartIcon />
    </CursorBox>

  )
}

export default Cart