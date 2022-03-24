import React from 'react';
import styled from "styled-components"
import { Box, Grid } from "grommet"
//atom
import Title from "../../../atom/type/title"
import Text from "../../../atom/type/text"
import Image from "../../../atom/image"

const ImageContainer = styled(Box)`
  position:relative;
  height:100%;
`

const BoxPointer = styled(Box)`
  cursor:pointer;
`

const Product = () => {
  return (
    <BoxPointer height="small" >
      <Grid
        rows={['2/3', '1/3']}
        margin="xsmall"
        fill="vertical"
      >
        <Box>
          {/* image */}
          <ImageContainer>
            <Image
              src="image/bedrijventerrein.jpeg"
              alt="test"
            />
          </ImageContainer>
        </Box>

        <Box>
          {/* title */}
          <Box margin="small">
            <Title size="small" name="Original Coffee Scrub" />
          </Box>

          {/* price */}
          <Box margin="small">
            <Text>"$13.95"</Text>
          </Box>

        </Box>

      </Grid>
    </BoxPointer>
  )
}

export default Product
