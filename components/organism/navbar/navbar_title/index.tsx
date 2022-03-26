import { Heading } from "grommet"
import styled from "styled-components"
//atom
import Link from "../../../atom/link"
//constant
import { NAVLINK_HOME } from "../../../../shared/data"

type titleProps = { name: string }

const PointerHeading = styled(Heading)`
cursor:pointer;
`
const Title = ({ name }: titleProps) => {
  return (
    <Link href={NAVLINK_HOME.href}>
      <a>
        <PointerHeading color="headingColor" margin="none" level="3">{name}</PointerHeading>
      </a>
    </Link>
  )

}
export default Title