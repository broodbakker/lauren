import React, { FunctionComponent } from 'react';
import styled from "styled-components"
//components
import Cart from "./organism/cartMenu"
import { SearchMenu } from './organism/searchMenu';
import { NavMenu } from './organism/navMenu';
import Navbar from "./organism/navbar"
import Footer from "./footer"

import { Box } from "grommet"

//constants
type LayoutProps = {
}

const RelativeBox = styled(Box)`
position:relative;`

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <RelativeBox >
      <Cart />
      <SearchMenu />
      <NavMenu />
      <div hidden id="snipcart" data-api-key="MzQwMDZmNzMtNTEyNi00YjM0LTllODAtOGNhNDJmYTYxOGEwNjM3ODMxMjU2MzI5MDQ0NDcz" data-config-modal-style="side"></div>

      <Navbar />
      {children}
      <Footer />

    </RelativeBox >
  )
}



