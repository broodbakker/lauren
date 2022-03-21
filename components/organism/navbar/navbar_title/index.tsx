import { Heading } from "grommet"

type titleProps = { name: string }

const Title = ({ name }: titleProps) => {
  return <Heading color="headingColor" margin="none" level="3">{name}</Heading>
}
export default Title