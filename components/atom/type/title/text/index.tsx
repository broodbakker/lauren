import React, { FunctionComponent, ReactChildren, ReactChild } from "react"
import { Text } from "grommet"

type textProps = {
  children: ReactChild | ReactChildren;
  size?: "xsmall" | "small" | "medium" | "large",
  textAlign?: 'start' | 'center' | 'end' | 'justify'
  light?: boolean
  weight?: number | "bold" | "normal" | "bolder" | "lighter"
}

const TextView: FunctionComponent<textProps> = ({ children, size, textAlign, light, weight }: textProps) =>
  <Text color={light ? "white" : "fontColor"} size={size} textAlign={textAlign} weight={weight}>{children}</Text>

export default TextView