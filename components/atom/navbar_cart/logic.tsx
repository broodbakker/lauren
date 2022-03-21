//state
import { useIsMenuOpen } from '../../../state/isCartMenuOpen'

export const HandleCartMenu = () => {
  const { dispatch, state: { isMenuOpen } } = useIsMenuOpen()
  const menuAction = isMenuOpen ? "close" : "open"

  const handleClickMenu = () => dispatch({ type: menuAction })

  return handleClickMenu
}