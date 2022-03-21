//grommet
import { Box } from "grommet"
//animation
import { TextAnimation } from "../../../../animation/textAnimation"
//data
import { newsbar_lines } from "../../../../shared/data"

const Newsbar = () => {
  return (
    <Box background="primary" align="center">
      <TextAnimation lines={newsbar_lines}></TextAnimation>
    </Box>
  )
}

export default Newsbar