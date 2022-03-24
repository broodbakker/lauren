import React from 'react'
import styled from "styled-components"
//components
import { Box, Carousel } from "grommet"

import Image from "../index"

import { Attraction, Car, TreeOption, Cloud, Amazon } from 'grommet-icons';

const RelativeImg = styled(Box)`
  position:relative;
`

type ContainerProps = {
  images: string[]
}


const Container = ({ images }: ContainerProps) =>
<Carousel
fill
controls="arrows"
>
{images.map((image,index) =>
    <RelativeImg fill align="center" justify="center" key={index}>
      <Image src={image} alt="test" />
    </RelativeImg>
    )}
</Carousel>



export default Container
