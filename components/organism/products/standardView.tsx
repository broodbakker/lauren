import React from 'react';
import styled from "styled-components"
import { Box } from "grommet"
import { Product } from "../../../typescript"
//atoms
import { PaymentButton } from "../../atom/buttons"
import Image from "../../atom/image"
import Text from "../../atom/type/text"
import Title from "../../atom/type/title"
import Link from "../../atom/link"

const ContainerImg = styled(Box)`
  position:relative;`

const CursorBox = styled(Box)`
  cursor:pointer;`

type HomeProps = {
  productData: Product
}

const Home_Product = ({ productData }: HomeProps) => {
  return (
    <CursorBox pad="small">

      <Link href={productData.slug}>
        <a>
      <Box>
        {/* image */}
        <ContainerImg height="small">
          <Image
            src={productData.image[0]}
            alt="Picture of the author"
          />
        </ContainerImg>

        <Box background="secondary" >
          <Text size="small" textAlign="center" light>Paarden / Ketting / Armband</Text>
        </Box>

        <Box height="xsmall" pad="small">
          <Title size="small" name={productData.name} />
        </Box>

        <PaymentButton name="add to cart | $30" fill thin productData={productData} />
      </Box>
      </a>
          </Link>

    </CursorBox>
  )
}




export default Home_Product

