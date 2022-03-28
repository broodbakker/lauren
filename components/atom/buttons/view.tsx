
import React from 'react'
import styled, { css } from "styled-components"
import { normalizeColor } from "grommet/utils";
//components
import { Button } from "grommet"
//icons
import { FormNextLink } from 'grommet-icons';
//typescript
import { SnipCartButton } from "../../../typescript"

interface UserButtonProps {
  readonly thin?: boolean;
}

const UserButton = styled(Button) <UserButtonProps>`
  border-radius:0;

  ${({ thin }) => thin && `
  padding:5px 5px;
  `};

  ${props => css`
    background-color: ${normalizeColor("primary", props.theme)} ;
  `}
`
type ButtonProps = {
  name: string
  fill?: boolean
  thin?: boolean
  handleClick?: () => void
  icon?: string
  snipCartData?: SnipCartButton
  href?: string
  type?: string
}

const ArrowButton = ({ name, fill, thin, handleClick, ...props }: ButtonProps) => <UserButton label={name} alignSelf={fill ? "stretch" : "center"} icon={<FormNextLink />} thin={thin} onClick={handleClick} {...props} />

const NormalButton = ({ name, fill, thin, handleClick, ...props }: ButtonProps) => <UserButton label={name} alignSelf={fill ? "stretch" : "center"} thin={thin} onClick={handleClick} {...props} />

export { ArrowButton, NormalButton }



