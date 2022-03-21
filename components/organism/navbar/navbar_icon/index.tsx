//state
import { HandleNavMenu, HandleSearchMenu } from './logic'
//component
import { Menu, Search } from "./icon"

export const MenuIcon = () => {
  const handleClick = HandleNavMenu()

  return <Menu handleClick={handleClick} />
}

export const SearchIcon = () => {
  const handleClick = HandleSearchMenu()

  return <Search handleClick={handleClick} />
}

