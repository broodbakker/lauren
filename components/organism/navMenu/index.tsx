import View from "./view"
import { Logic } from "./logic"

export const NavMenu = () => {
  const { isNavMenuOpen,closeMenu } = Logic()

  return   <View isNavMenuOpen={isNavMenuOpen} handleClickMenu={closeMenu} />

}
