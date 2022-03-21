import React from 'react'
import styled from "styled-components"
//components
import Landing from "./landing"
import Lauren_fotos from "./lauren_fotos"
import Winkel from "./winkel"
import Producten_photos from "./product_photos"
import { Box, ResponsiveContext } from "grommet"
//constants
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_SMALL } from "../../../shared/data"

const Container = styled(Box) <ContainerProps>`
  margin-top:${(props) => (`${props.navbarHeight}px`)};
`
interface ContainerProps {
  navbarHeight: string;
}
const Home = () => {
  const size = React.useContext(ResponsiveContext);

  const height = size === "small" ? NAVBAR_HEIGHT_SMALL : NAVBAR_HEIGHT
  return (
    <Container navbarHeight={height}>

      {/* over mij */}
      <Landing />
      {/* <Wat_maak_ik_allemaal /> */}
      <Lauren_fotos />

      <Winkel />

      <Producten_photos />

    </Container>)
}

export default Home
