import React from 'react'
import styled from "styled-components"
//components
import Winkel from "./winkelPage/winkel"
import { Box, ResponsiveContext } from "grommet"
//constants
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_SMALL } from "../../../shared/data"

const Container = styled(Box) <ContainerProps>`
  margin-top:${(props) => (`${props.navbarHeight}px`)};
`
interface ContainerProps {
  navbarHeight: string;
}
const WinkelPage = () => {
  const size = React.useContext(ResponsiveContext);

  const height = size === "small" ? NAVBAR_HEIGHT_SMALL : NAVBAR_HEIGHT
  return (
    <Container navbarHeight={height}>

      <Winkel />

    </Container>)
}

export default WinkelPage
