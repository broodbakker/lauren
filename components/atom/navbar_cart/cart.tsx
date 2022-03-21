import React from 'react'
import styled from "styled-components"

import { Image, Box } from "grommet"

const NewIcon = styled(Box)`
  height:40px;`

const FlexBox = styled(Box)`
  justify-content:center;`

type CartProps = {
}

const CartIcon = ({ }: CartProps) => {
  return (
    <FlexBox justify="end" margin={{ vertical: "" }}>
      <NewIcon
        animation={{
          type: "jiggle",
          delay: 0,
          duration: 1000,
        }}

        focusIndicator={false}
      >
        <Image
          fit="cover"
          src="./icons/shopIcon.svg"
          fill={true}
        />
      </NewIcon>
    </FlexBox>
  )
}




export default CartIcon