import React from 'react';
import styled from "styled-components"
//components
import PlusMinusButton from "../../../atom/buttons/plus_minus_button"
import { Anchor, Box, Grid, Image, Button, Heading, Paragraph, Layer } from "grommet"
//icon
import { Close } from 'grommet-icons';
//atoms
import Title from "../../../atom/type/title"

const B = styled(Box)`
background-color:#f8fffc;
`
const Product = () => {
  return (
    <Box>
      <B margin="small">
        <Grid
          rows={['115px']}
          columns={['1/3', '2/3']}
          areas={[
            { name: 'header', start: [0, 0], end: [0, 0] },
            { name: 'nav', start: [1, 0], end: [1, 0] },
          ]}
        >
          <Box>
            {/* image */}
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
          </Box>
          <Box>

            {/* cross icon */}
            <Box alignSelf="end">
              <Anchor href="#" label="" margin="none" alignSelf="start" icon={<Close size='small' />} color="dark-2" />
            </Box>

            {/* title */}
            <Box margin="small" flex={false}>
              <Title name="Original Coffee Scrub" size="small" />
            </Box>

            <Grid
              rows={['auto']}
              columns={["2/3", "1/3"]}
              margin={{ bottom: "large" }}
            >
              {/* button */}
              <Box margin={{ horizontal: "small", vertical: "small" }}>
                <PlusMinusButton />
              </Box>
              {/* price */}
              <BoxCenter margin="small">
                <Title name="$13.95" size="small" />
              </BoxCenter>

            </Grid>
          </Box>
        </Grid>
      </B>
    </Box>
  )

}

export default Product

const BoxCenter = styled(Box)`
display:flex;
justify-content: center;
align-items: center;
`
