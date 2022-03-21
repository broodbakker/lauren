import React, { FunctionComponent } from 'react';
import { Box, Layer } from "grommet"
//atom
import Cross from "../../atom/cross"
import Input from "../../atom/inputText/input"
import Text from "../../atom/type/title/text"
//grid
import Products from '../../grids/searchMenu_products';

type SearchProps = {
  isSearchMenuOpen: boolean,
  closeMenu: () => void
}

const View: FunctionComponent<SearchProps> = ({ isSearchMenuOpen, closeMenu }) => {
  return (
    <>
      {isSearchMenuOpen && (
        <Layer
          onEsc={closeMenu}
          onClickOutside={closeMenu}
          background={{
            color: "primaryLight",
            opacity: 0.85
          }}
          position="top"
        >
          <Box overflow="scroll" background={{ opacity: true }}>
            {/* cross icon */}
            <Box alignSelf="end" flex={false}>
              <Cross handleClick="closeSearchMenu" />
            </Box>
            {/* Search */}
            <Box margin="medium" flex={false}>
              <Input placeholder="type here" type="search" bgColor='light' />
            </Box>
            {/* text */}
            <Box alignSelf="center" flex={false} width="medium">
              <Text textAlign="center" >Search by product name, product type, ingredient or emoji - kidding you can’t really search by emoji.</Text>
            </Box>
            {/* Products */}
            <Products />
          </Box>
        </Layer>
      )
      }
    </>
  );
}

export default View
