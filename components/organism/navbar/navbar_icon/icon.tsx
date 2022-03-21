import React from 'react'
import styled from "styled-components"
import { Anchor } from "grommet"
import { Menu as MenuIcon, Search as SearchIcon } from 'grommet-icons';

const AnchorFocusNone = styled(Anchor)`
  box-shadow:none;
    &:focus {
          outline: none;
      }
`

type IconProps = {
  handleClick: () => void
}

export const Menu = ({ handleClick }: IconProps) => {
  return (
    <AnchorFocusNone href="#" label="" color="iconColor" icon={<MenuIcon size='medium' />} onClick={handleClick} />
  )
}

export const Search = ({ handleClick }: IconProps) => {
  return (
    <AnchorFocusNone href="#" label="" margin="none" alignSelf="start" color="iconColor" icon={<SearchIcon size='medium' />} onClick={handleClick} />
  )
}

