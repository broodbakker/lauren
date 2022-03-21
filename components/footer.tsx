import React from 'react'
//components
import { Heading, Grid, Box, ResponsiveContext, } from "grommet"

import { Instagram, Youtube, Twitter, Facebook } from 'grommet-icons';
import styled from "styled-components"

import Title from "./atom/type/title"
import Text from "./atom/type/title/text"
//organism
import Form from "./organism/form"

const FooterComponent = () =>
  <>
    <Box border={{ color: "neutral-1", side: "horizontal", size: "small" }} margin={{ top: "large" }}>
      <ResponsiveGrid
        responsive={true}
        rows={['auto', 'auto', 'auto']}
        columns={['1/5', '1/5', "1/5", "1/5", "1/5"]}
        areas={{
          small: [
            { name: 'one', start: [0, 0], end: [4, 0] },
            { name: 'two', start: [0, 1], end: [4, 1] },
            { name: 'three', start: [0, 2], end: [4, 2] },
          ],
          medium: [
            { name: 'one', start: [0, 0], end: [2, 2] },
            { name: 'two', start: [3, 0], end: [4, 1] },
            { name: 'three', start: [3, 2], end: [4, 2] },
          ],
          large: [
            { name: 'one', start: [0, 0], end: [2, 0] },
            { name: 'two', start: [3, 0], end: [3, 0] },
            { name: 'three', start: [4, 0], end: [4, 0] },
          ],
        }
        }>
        {/* 1 */}
        <Box gridArea='one' margin="small">
          <Box align="center">
            <Box width={{ max: "large" }} >
              <Box>
                <Title name="Als je vragen hebt of iets op maat gemaakt wil hebben email mij dan" size="small" />
              </Box>

              <Form />

              <Box direction="row" margin="small" justify="around">
                <Instagram color="primary" />
                <Youtube color="primary" />
                <Facebook color="primary" />
                <Twitter color="primary" />
              </Box>

            </Box>
          </Box>

        </Box>

        {/* 2 */}
        <Box gridArea='two' direction="row" justify="center" >


          <Box margin="medium" >
            <HeadingText level="4">
              Help
            </HeadingText>

            <Box margin={{vertical:"xsmall"}}>
              <Text>     FaQ  </Text>
            </Box>


            <Box margin={{vertical:"xsmall"}}>
              <Text>     shipping  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>      geld terug  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>      contact  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>           hoe ik het maak  </Text>
            </Box>

          </Box>

          <Box margin="medium">
            <HeadingText level="4">
              Help
            </HeadingText>

            <Box margin={{vertical:"xsmall"}}>
              <Text>     FaQ  </Text>
            </Box>


            <Box margin={{vertical:"xsmall"}}>
              <Text>     shipping  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>      geld terug  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>      contact  </Text>
            </Box>

            <Box margin={{vertical:"xsmall"}}>
              <Text>           hoe ik het maak  </Text>
            </Box>
          </Box>

        </Box>

        {/* 3 */}
        <Box gridArea='three'>logo</Box>
      </ResponsiveGrid>
    </Box>

    <Box margin="medium">
      Cookie Policy | Privacy & Terms | Accessibility | © 2021 Frank Body | Words by Willow and Blake
    </Box>
  </>


const HeadingText = styled(Heading)`
 text-transform: uppercase;
`

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  );
};

export default FooterComponent