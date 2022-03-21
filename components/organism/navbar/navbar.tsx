import React from 'react'
import styled from "styled-components"
//atom
import Newsbar from './navbar_newsbar'
import { MenuIcon, SearchIcon } from "./navbar_icon"
import Title from "./navbar_title"
import Link from "../../atom/link"
//molecule
import NavLinks from './navbar_navlinks'
import Cart from "./navbar_cart"
//constant
import { NAVLINK_HOME } from "../../../shared/data"

import { Header as HeaderGrommet, Grid, Box } from "grommet"

const NewHeader = styled(HeaderGrommet)`
  position:fixed;
  top:0;
  width:100%;
  z-index:2;
`
const Header = () => {
  return (
    <NewHeader background="white" border={{ color: "primary", side: "bottom" }} >
      <Box fill="horizontal">
        {/* newsbar */}
        <Newsbar />

        <Grid
          rows={['auto']}
          columns={['1/4', '2/4', "1/4"]}
        >
          <Box direction="row" justify="center" >
            {/* menu */}
            <MenuIcon />

            {/* search */}
            <SearchIcon />
          </Box>

          {/* header */}
          <Box align="center" width="large" alignContent="center" alignSelf="center">
            <Link href={NAVLINK_HOME.href}>
              <Title name="Lauren van Hofwegen" />
            </Link>
          </Box>

          {/* shopping */}
          <Box direction="row" pad={{ horizontal: "" }} justify="center" >
            <Cart />
          </Box>
        </Grid>

        {/* Nav */}
        <NavLinks />
      </Box>
    </NewHeader >
  )
}

export default Header