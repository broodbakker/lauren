import styled from "styled-components"
import { Text as BaseText, Paragraph as BaseParagraph } from "grommet"

export const Text = styled(BaseText)`
color:${props => props.theme.global.colors.fontColor};
//underscore
  ${props => (props.underscore) &&
    `border-bottom: 4px solid ${props.theme.global.colors.theme};`}
//bold
   ${props => (props.bold) &&
    `font-weight:600;
      color: black;`}

//italic
  ${props => (props.italic) &&
    ` font-style: italic;`
  }
`

export const Paragraph = styled(BaseParagraph)`
//underscore
  ${props => (props.underscore) &&
    `border-bottom: 4px solid ${props.theme.global.colors.theme};`}

//bold
${props => (props.bold) &&
    `font-weight:800;
      color: black;`}

      //italic
  ${props => (props.italic) &&
    ` font-style: italic;`
  }
`