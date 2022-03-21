import styled from "styled-components"

export const List = styled.ul`
li {
//bold
${props => (props.bold) &&
    `font-weight:600;
      color: black;`}

}

li::marker {
    content: "🧡 ";
}
`
