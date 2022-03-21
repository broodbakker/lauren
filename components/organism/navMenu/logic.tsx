import { useIsNavMenuOpen } from '../../../state/isNavMenuOpen'

export const Logic = () => {
  const { dispatch, state: { isNavMenuOpen } } = useIsNavMenuOpen()

  const closeMenu = () => dispatch({ type: "close" })

  return { isNavMenuOpen, closeMenu }
}


