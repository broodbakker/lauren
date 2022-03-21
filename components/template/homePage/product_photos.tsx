import React from 'react'
import styled from "styled-components"
//components
import { Image, Box, Carousel } from "grommet"

//atom
import Title from "../../atom/type/title"
import { Button } from "../../atom/buttons"
import Image1 from "../../atom/image"

const Product_photos = () =>
  <Container background="primaryLight" >
    <Box overflow="hidden" fill>
      <BoxAspect overflow="hidden" height="medium">
        <Carousel fill play={5000} >
          <Image1 alt="test" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
          <Image1 alt="test" src="//v2.grommet.io/assets/IMG_4245.jpg" />
          <Image1 alt="test" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
      </BoxAspect>

    </Box>

    <Box margin="large" alignContent='center' justify="center">
      <Title name=" Four mini scrubs to
        split and gift to
        your four best babes." size="medium" />

      <Box pad="small">
        <Button name="lees meer" />
      </Box>
    </Box>
  </Container>

export default Product_photos


const Container = styled(Box)`
  position:relative;
  @media (min-width: 600px) {
    flex-direction: row;
    }
`

const BoxAspect = styled(Box)`
 aspect-ratio: 5/3;
 @media (min-width: 600px) {
  aspect-ratio: 3/3;
    }
`