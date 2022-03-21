
import React from 'react'
import styled from "styled-components"
//components
import { Image, Box } from "grommet"

const Icon = styled(Box)`
  display: inline-block;
  z-index:-1;
  position:relative;
`

type ViewProps = {
  src: string
}

const View = ({ src }: ViewProps) =>
  <Icon
    animation={{
      type: "jiggle",
      delay: 0,
      duration: 1000,

    }}
    focusIndicator={false}
  >
    <Image
      fit="cover"
      src={src}

    />
  </Icon>

export default View




