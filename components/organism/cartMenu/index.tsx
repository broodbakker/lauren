import View from "./view"
import { Logic } from "./logic"

const Cart = () => {
  const { isCartMenuOpen, closeMenu } = Logic()

  return <View isCartMenuOpen={isCartMenuOpen} handleClickMenu={closeMenu} />

}

export default Cart