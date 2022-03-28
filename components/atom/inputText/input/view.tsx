import React from 'react';
import styled, { css } from "styled-components"
import { TextInput } from "grommet"
import { Search } from 'grommet-icons';
import { normalizeColor } from "grommet/utils";



const Container = styled(TextInput)`
  border-radius:0;
  ${props => css`
   border: 1px ${normalizeColor("primaryDark", props.theme)} solid;
   background-color: ${props.bgColor === "light" ? "white" : normalizeColor("primaryLight", props.theme)};
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
  bgColor: string
  name: string
}

function SearchInput({ value, handleChange, placeholder, bgColor, name }: InputProps) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      icon={<Search />}
      bgColor={bgColor}
      name={name}
    />
  );
}

function StandardInput({ value, handleChange, placeholder, bgColor }: InputProps) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      bgColor={bgColor}
      name={name}
    />
  );
}

export { SearchInput, StandardInput }