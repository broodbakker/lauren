//grommet
import { Box } from "grommet"
//animation
import { TextAnimation } from "../../../../animation/textAnimation"
//data
import { NEWSBAR_LINES } from "../../../../shared/data"

const Newsbar = () => {
  return (
    <Box background="primary" align="center">
      <TextAnimation lines={NEWSBAR_LINES}></TextAnimation>
    </Box>
  )
}

export default Newsbar