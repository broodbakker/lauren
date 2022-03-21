import View from "./view"
import { Logic } from "./logic"

export const SearchMenu = () => {
  const { isSearchMenuOpen, closeMenu } = Logic()

  return <View isSearchMenuOpen={isSearchMenuOpen} closeMenu={closeMenu} />

}
