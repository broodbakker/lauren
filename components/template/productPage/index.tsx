import React from 'react'
import styled from "styled-components"
//components
import { Box, ResponsiveContext } from "grommet"
//constants
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_SMALL } from "../../../shared/data"
import ResponsiveGrid from "../../../shared/grid/responsiveGrid"
// atom
import Title from "../../atom/type/title"
import Text from "../../atom/type/text"
import { PaymentButton } from "../../atom/buttons"
import Carousel from "../../atom/image/carousel"
//data
import { GLOBALSTYLE } from "../../../shared/styles"
//typescript
import { Product } from '../../../typescript';

const Container = styled(Box) <ContainerProps>`
  margin-top:${(props) => (`${props.navbarHeight}px`)};
`

interface ContainerProps {
  navbarHeight: string;
}

const ContainerImg = styled(Box)`
  aspect-ratio: 3/2;
  width:100%;
 @media ${GLOBALSTYLE.breakpoint.minmobile} {
  aspect-ratio: 1/1;
  padding:12px;
    }
`

const columns = {
  small: ['auto'],
  medium: ['60%', "40%",],
  large: ['50%', "50%"],
};

const rows = {
  small: ['auto', 'auto', 'auto', 'auto',],
  medium: ['auto', 'auto', 'auto', 'auto',],
  large: ['auto', 'auto', 'auto', 'auto',],
};

type ProductPageProps = {
  productData: Product
}

const ProductPage = ({ productData }: ProductPageProps) => {
  const size = React.useContext(ResponsiveContext);

  const height = size === "small" ? NAVBAR_HEIGHT_SMALL : NAVBAR_HEIGHT

  return (
    <Container navbarHeight={height} >
      <Box justify="center" align="center">
        <ResponsiveGrid
          responsive={true}
          rows={rows}
          columns={columns}
          width={{ max: "xlarge" }}
        >
          {/* image */}
          <ContainerImg>
            <Carousel images={productData.image} />
          </ContainerImg>
          {/* title */}
          <Box margin="small">
            <Box margin={{ vertical: "small" }}>
              <Title name={productData.name} size="medium" />
            </Box>
            {/* price */}
            <Box margin={{ vertical: "small" }}>
              <Text size="medium" >{`€${productData.price} EUR`}</Text>
            </Box>
            {/* description */}

            <Box margin={{ vertical: "small" }}>
              <Text >{productData.description}</Text>
              {/* add cart */}
            </Box>
            <Box margin={{ vertical: "small" }}>
              <PaymentButton name="add to cart" productData={productData} />
            </Box>
          </Box>

          {/* tags  */}
        </ResponsiveGrid>
      </Box>
    </Container>
  )
}

export default ProductPage
