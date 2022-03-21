import React from 'react';
import styled from "styled-components"
import { Box, Grid } from "grommet"
//atom
import Title from "../../../atom/type/title"
import Image from "../../../atom/image"

const ImageContainer = styled(Box)`
  position:relative;
`

const Product = () => {
  return (
    <Box height="xsmall">
      <Grid
        columns={['1/3', '2/3']}
        fill="vertical">
        <ImageContainer>
          {/* image */}
          <Image
            src="image/bedrijventerrein.jpeg"
            alt="test"
          />
        </ImageContainer>

        <Box justify="center" background="bgProductColor">
          {/* title */}
          <Box margin="small">
            <Title size="small" name="Original Coffee Scrub" />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Product


