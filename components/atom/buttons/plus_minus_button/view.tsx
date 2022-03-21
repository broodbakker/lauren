import React from 'react';
import styled from "styled-components"
import { Box } from "grommet"

import { Button } from "../index"
import Text from "../../type/title/text"

const Box3 = styled(Box)`
 display:flex;
 justify-content: space-between;
`

type PlusMinusButton = {
  handlePlus: () => void
  handleMin: () => void
  amount: number
}

const PlusMinusButton = ({ handlePlus, handleMin, amount }: PlusMinusButton) => {
  return (
    <Box width="xsmall">
      <Box3
        border={{ color: "secondary", size: "small" }}
        direction="row"
      >
        {/* - */}
        <Button name="-" handleClick={handleMin} />

        {/* amount */}
        <Box justify="center" >
          <Text>
            {amount}
          </Text>
        </Box>
        {/* + */}
        <Button name="+" handleClick={handlePlus} />


      </Box3>
    </Box>
  )
}

export default PlusMinusButton
