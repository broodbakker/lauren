import React, { FunctionComponent, useState } from 'react';
import styled from "styled-components"

import { Anchor, Box, Grid, Image, Button, Heading, Paragraph, Layer } from "grommet"


const Button1 = styled(Button)`
  border-radius:0;
  color: white;
  border: ${props => props.theme.global.colors['status-ok']} 2px solid;
  background-color:${props => props.theme.global.colors["status-ok"]};

  &:hover {
    background-color:${props => props.theme.global.colors["accent-4"]};
    color:${props => props.theme.global.colors["dark-2"]};
    border: 2px solid ${props => props.theme.global.colors["accent-4"]};
  }
`


export const PlusMinusButton = () => {
  const [amount, setAmount] = useState(0)

  const handlePlus = () => {
    setAmount(amount + 1)
  }

  const handleMin = () => {
    if (0 >= amount) return setAmount(amount)
    setAmount(amount - 1)
  }

  return (
    <Grid
      rows={['auto']}
      columns={['1/3', '1/3', '1/3']}
      areas={[
      ]}
      border={{ color: "status-ok", size: "small" }}
    >
      {/* - */}
      <Button1 primary color="status-ok" label="-" onClick={handleMin} >
      </Button1>
      {/* amount */}
      <Box2 justify="center" margin={{ horizontal: "large" }}>
        {amount}
      </Box2>
      {/* + */}
      <Button1 primary color="status-ok" label="+" onClick={handlePlus} >
      </Button1>
    </Grid>
  )
}

const Box2 = styled(Box)`
display:flex;
justify-content: center;
align-items: center;
`