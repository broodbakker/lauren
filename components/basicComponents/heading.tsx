import styled from "styled-components"
import { Heading as BaseHeading } from "grommet"

export const Heading = styled(BaseHeading)`
color:${props => props.fontColor && props.theme.global.colors.fontColor};

//uppercase
${props => (props.uppercase) &&
    `text-transform: uppercase;`
  }
`