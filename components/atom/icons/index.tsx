import React from 'react'
import { Anchor } from "grommet"
import { Menu as MenuIcon, Search as SearchIcon, CircleInformation } from 'grommet-icons';

type IconProps = {
  type: string
  name: string
  color?: "light" | "dark"
}

const iconList = {
  menu: <MenuIcon size='medium' />,
  circle: <CircleInformation size='medium' />,
  search: <SearchIcon size='medium' />
}

const Icon = ({ type, name,color }: IconProps) => {
  return (
    <Anchor href="#" label={name} color={color === "light" ? "iconColorLight" : "iconColor"} weight="300" icon={iconList[type]} onClick={() => { }} />
  )
}

export default Icon