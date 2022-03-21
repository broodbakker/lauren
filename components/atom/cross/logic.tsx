//state
import { useIsNavMenuOpen } from '../../../state/isNavMenuOpen'
import { useIsSearchMenuOpen } from '../../../state/isSearchMenuOpen'
import { useIsCartMenuOpen } from '../../../state/isCartMenuOpen'

export const closeNavMenu = () => {
  const { dispatch } = useIsNavMenuOpen()

  const closeMenu = () => dispatch({ type: "close" })

  return closeMenu
}

export const closeSearchMenu = () => {
  const { dispatch } = useIsSearchMenuOpen()

  const handleClickMenu = () => dispatch({ type: "close" })

  return handleClickMenu
}

export const closeCartMenu = () => {
  const { dispatch } = useIsCartMenuOpen()

  const handleClickMenu = () => dispatch({ type: "close" })

  return handleClickMenu
}