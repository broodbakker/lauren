//state
import { useIsNavMenuOpen } from '../../../../state/isNavMenuOpen'
import { useIsSearchMenuOpen } from '../../../../state/isSearchMenuOpen'

export const HandleNavMenu = () => {
  const { dispatch, state: { isNavMenuOpen } } = useIsNavMenuOpen()
  const menuAction = isNavMenuOpen ? "close" : "open"

  const handleClickMenu = () => dispatch({ type: menuAction })

  return handleClickMenu
}

export const HandleSearchMenu = () => {
  const { dispatch, state: { isSearchMenuOpen } } = useIsSearchMenuOpen()
  const menuAction = isSearchMenuOpen ? "close" : "open"

  const handleClickMenu = () => dispatch({ type: menuAction })

  return handleClickMenu
}
