import React from 'react'
import styled from "styled-components"
//components
import Navbar from "../organism/navbar/index"
import Landing from "./homePage/landing"
import Lauren_fotos from "./homePage/lauren_fotos"
import Producten_photos from "./homePage/product_photos"
import Footer from "../footer"
import { Box, ResponsiveContext } from "grommet"
//constants
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_SMALL } from "../../shared/data"

const Container = styled(Box) <ContainerProps>`
  margin-top:${(props) => (`${props.navbarHeight}px`)};
`
interface ContainerProps {
  navbarHeight: string;
}
const Over_mijPage = () => {
  const size = React.useContext(ResponsiveContext);

  const height = size === "small" ? NAVBAR_HEIGHT_SMALL : NAVBAR_HEIGHT
  return (
    <Container navbarHeight={height}>
      {/* over mij */}
      <Landing />
      {/* <Wat_maak_ik_allemaal /> */}
      <Lauren_fotos />

      <Producten_photos />

    </Container>)
}

export default Over_mijPage
