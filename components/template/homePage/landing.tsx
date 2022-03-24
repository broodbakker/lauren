
import React from 'react'
import styled from "styled-components"
import { Box } from "grommet"
//atoms
import Image from "../../atom/image"
import { LinkButton } from "../../atom/buttons"
import WaveIcon from "../../atom/icons/jiggleIcon"
import Text1 from "../../atom/type/text"
//data
import { GLOBALSTYLE } from "../../../shared/styles"
import { NAVLINK_OVER_MIJ } from "../../../shared/data"

const Container = styled(Box)`
  > div {
     flex-direction:column;
  }
  @media ${GLOBALSTYLE.breakpoint.minmobile}  {
    flex-direction: row;
    height:300px;
    > div {
    flex-direction:row;
    margin:18px;
    }
  }

`
const ImageContainer = styled(Box)`
  position:relative;
  z-index:-1;
  aspect-ratio: 2/1;
  width:100%;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  @media ${GLOBALSTYLE.breakpoint.minmobile} {
    clip-path:ellipse(82% 85% at 17% 51%);
    height:100%;
    min-width:250px;
    max-width:250px;
    > img {
      border-radius:10px 0px 0px 10px;
  }
    }
`
const Landing = () =>
  <Container justify="center">
    <Box width={{ max: "large" }} >
      <ImageContainer>
        <Image
          src="image/lauren2.jpeg"
          alt="Picture of the author"
        />
      </ImageContainer>

      <Box pad="small" width={{ max: "large" }} alignSelf="center">
        <Text1 textAlign="center">
          <>
            Hi!
            <WaveIcon src="./icons/waveIcon.svg" />
            Dit ben ik! Ik ben Lauren, Wat leuk dat je een bezoekje brengt aan mijn website. Ik  knuttsel dagelijks artikelen over fashion, beauty en lifestyle. Heel veel lees- en kijkplezier toegewenst! Kijk eens rond!
          </>
        </Text1>


        {/* button */}
        <Box margin={{ top: "small" }}>
          <LinkButton name="lees meer 🦸‍♀️" href={NAVLINK_OVER_MIJ.href} />
        </Box>
      </Box>

    </Box>

  </Container>

export default Landing



