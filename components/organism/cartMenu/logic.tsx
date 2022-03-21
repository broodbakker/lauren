import { useIsCartMenuOpen } from '../../../state/isCartMenuOpen'

export const Logic = () => {
  const { dispatch, state: { isCartMenuOpen } } = useIsCartMenuOpen()

  const closeMenu = () => dispatch({ type: "close" })

  return { isCartMenuOpen, closeMenu }
}


