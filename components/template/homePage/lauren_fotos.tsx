import React from 'react'
import styled from "styled-components"
//components
import { Grid, Box } from "grommet"
//atoms
import Title from "../../atom/type/title"
import Image from "../../atom/image"

const PhotoContainer = styled(Box)`
  position:relative;
  aspect-ratio: 1;
`
const Lauren_fotos = () =>
  <Box margin={{ vertical: "small" }}>
    <Box margin="small">
      <Title name="Dit ben ik! 🦸‍♀️" size="medium" />
    </Box>

    <Grid
      rows={['auto']}
      columns={['1/4', '1/4', "1/4", "1/4"]}
    >
      <PhotoContainer height={{ max: "medium" }} >
        <Image
          src="image/lauren4.jpeg"
          alt="Picture of the author"
        />
      </PhotoContainer>
      <PhotoContainer height={{ max: "medium" }} >
        <Image
          src="image/lauren5.jpeg"
          alt="Picture of the author"
        />
      </PhotoContainer>
      <PhotoContainer height={{ max: "medium" }} >
        <Image
          src="image/lauren6.jpeg"
          alt="Picture of the author"
        />
      </PhotoContainer>
      <PhotoContainer height={{ max: "medium" }} >
        <Image
          src="image/lauren3.jpeg"
          alt="Picture of the author"
        />
      </PhotoContainer>
    </Grid>
  </Box>

export default Lauren_fotos


