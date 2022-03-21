import { useIsSearchMenuOpen } from '../../../state/isSearchMenuOpen'

export const Logic = () => {
  const { dispatch, state: { isSearchMenuOpen } } = useIsSearchMenuOpen()

  const closeMenu = () => dispatch({ type: "close" })

  return { isSearchMenuOpen, closeMenu }
}


