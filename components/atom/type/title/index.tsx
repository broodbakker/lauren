import { Heading } from "grommet"

type titleProps = { name: string, size: "small" | "medium" | "large" }

type titleProps1 = { level: "3" | "2" | "1" | "4" | "5" | "6", size1: string }

const Title = ({ name, size }: titleProps) => {

  const { level, size1 }: titleProps1 =
    size === "small" ? { level: "4", size1: "small" } :
      size === "medium" ? { level: "3", size1: "medium" } : size === "large" ? { level: "2", size1: "medium" } : { level: "1", size1: "xlarge" }

  return <Heading color="headingColor" margin="none" level={level} size={size1}>{name}</Heading>
}
export default Title