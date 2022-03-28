import React from 'react';
import styled, { css } from "styled-components"
import { TextArea } from "grommet"
import { Search } from 'grommet-icons';
import { normalizeColor } from "grommet/utils";

const Container = styled(TextArea)`
  border-radius:0;
  ${props => css`
   border: 1px ${normalizeColor("primaryDark", props.theme)} solid;
   background-color: ${normalizeColor("primaryLight", props.theme)};
  `}
  ::placeholder {}
  &:focus {
    outline: none;
      ${props => css`
        box-shadow:  0px 0px 5px  ${normalizeColor("primary", props.theme)} ;
        border: 1px ${normalizeColor("primary", props.theme)} solid;
  `}
    }
`

type InputProps = {
  value: string,
  handleChange: (event: any) => void
  placeholder: string
  name: string
}

function View({ value, handleChange, placeholder }: InputProps) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      icon={<Search />}
      name={name}
    />
  );
}


export default View