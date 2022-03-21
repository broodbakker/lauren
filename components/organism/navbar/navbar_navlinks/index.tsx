import React from 'react'
import { Nav, Box } from "grommet"
//molecule
import NavLink from '../navbar_navlink'
//constant
import { NAVLINKS } from "../../../../shared/data"

const NavLinks = () => {
  return (
    <Box border={{ color: "borderColor", side: "top" }} background="navbarColor">
      <Nav direction="row" background="navbarColor" pad="small" alignSelf="center" >
        {NAVLINKS.map(({ name, href }) => <NavLink name={name} href={href} key={href} />)}
      </Nav>
    </Box>
  )
}

export default NavLinks