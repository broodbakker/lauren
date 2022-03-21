import React, { FunctionComponent } from 'react';
//state
import { closeNavMenu, closeSearchMenu,closeCartMenu } from './logic'
//component
import CrossView from "./view"

type CrossProps = {
  handleClick: "closeNavMenu" | "closeSearchMenu" | "closeCartMenu"
}

const clickList = {
  closeNavMenu,
  closeSearchMenu,
  closeCartMenu
}

export const Cross: FunctionComponent<CrossProps> = ({ handleClick }: CrossProps) => {

  const click = clickList[handleClick]

  return <CrossView handleClick={click()} />
}

export default Cross