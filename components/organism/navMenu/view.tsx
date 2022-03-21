import React, { FunctionComponent } from 'react';
import { Box, Layer } from "grommet"
//molecule
import Contact_information from "./navMenu_contactinformation"
import Products from "../../grids/navMenu_products"
//atom
import Cross from "../../atom/cross"

type MenuProps = {
  isNavMenuOpen: boolean,
  handleClickMenu: () => void
}

const View: FunctionComponent<MenuProps> = ({ isNavMenuOpen, handleClickMenu }) => {
  return (
    <Box overflow="scroll" >
      {isNavMenuOpen && (
        <Layer
          onEsc={handleClickMenu}
          onClickOutside={handleClickMenu}
          animation="slide"
          position="left"
          full="horizontal"
          plain={true}

        >
          <Box overflow="scroll" width="medium" background={{
            color: "primaryLight",
          }}
            border={{ color: "primaryDark", side: "right" }}
          >
            {/* cross icon */}
            <Box alignSelf="end" flex={false}>
              <Cross handleClick="closeNavMenu" />
            </Box>
            {/* products */}
            <Products />
            {/* Contact */}
            <Contact_information />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default View