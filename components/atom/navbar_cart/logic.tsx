//state
import { useIsCartMenuOpen } from '../../../state/isCartMenuOpen'


export const HandleCartMenu = () => {
  const { dispatch, state: { isCartMenuOpen } } = useIsCartMenuOpen()
  const menuAction = isCartMenuOpen ? "close" : "open"

  const handleClickMenu = () => dispatch({ type: menuAction })

  return handleClickMenu
}