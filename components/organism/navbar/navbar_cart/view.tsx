import React from 'react'
import styled from "styled-components"
//atom
import { CartIcon } from "../../../atom/navbar_cart"
import Text from "../../../atom/type/title/text"

import { Box } from "grommet"

const CursorBox = styled(Box)`
  cursor:pointer;
`
type ViewProps = {
  handleClick: () => void
}

const View = ({ handleClick }: ViewProps) => {
  return (
    <CursorBox direction="row" pad={{ horizontal: "" }} justify="start" onClick={handleClick} margin={{ vertical: "xsmall" }}>
      <Box margin={{ right: "xsmall" }} alignSelf="center">
        <Text weight={400} size="medium">Cart</Text>
      </Box>
      <CartIcon />
    </CursorBox>
  )
}

export default View