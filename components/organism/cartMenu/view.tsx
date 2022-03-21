import React, { FunctionComponent } from 'react';
//components
import { Box, Paragraph, Layer } from "grommet"
//molecule
import Products from "../../grids/cart_products"
//atom
import Title from "../../atom/type/title"
import Cross from "../../atom/cross"
import { Button } from "../../atom/buttons"
import Statement from "../../atom/cart_statement"

type CartProps = {
  isCartMenuOpen: boolean,
  handleClickMenu: () => void
}

const Cart = ({ isCartMenuOpen, handleClickMenu }: CartProps) => {
  return (
    <Box>
      {isCartMenuOpen && (
        <Layer
          onEsc={handleClickMenu}
          onClickOutside={handleClickMenu}
        >
          <InsideCart />
        </Layer>
      )}
    </Box>
  );
}

export default Cart

type InsideCartProps = {
}

const InsideCart: FunctionComponent<InsideCartProps> = () => {
  return (
    <Box background="">
      {/* cross icon */}
      <Box alignSelf="end" flex={false}>
        <Cross handleClick="closeCartMenu" />
      </Box>
      {/* title */}
      <Box alignSelf="center" margin={{ bottom: "small" }}>
        <Title name="YOUR CART" size="small" />
      </Box>

      <Box background="status-ok" pad="" border={{ color: 'accent-4', size: 'xsmall', side: "horizontal" }} margin={{ horizontal: "medium" }}>
      </Box>

      <Box overflow="scroll" height="medium">
        {/* boven kant */}
        <Statement />
        {/* producten */}
        <Products />
      </Box>

      {/* total */}
      <Box
        direction="row"
        border={{ color: "primary", side: "top", size: "small" }}
        margin="large"
        justify="around"
      >
        <Title name="SUBTOTAL" size="small" />
        <Title name=" 63.88 EURO" size="small" />
      </Box>

      {/* checkout  button*/}
      <Box margin="medium">
        <Button name="go to checkout" fill />
      </Box>
      {/* verder  shoppen*/}
      <Box margin="medium">
        <Button name="go door met shoppen" fill />
      </Box>

      {/* easy payment */}
      <Box>
        <Paragraph  >  Easy payment  </Paragraph  >
      </Box>
    </Box>
  )
}


