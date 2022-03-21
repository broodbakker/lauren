import React from 'react'
//components
import { Box, } from "grommet"

import Text from "../../atom/type/title/text"
import { Button } from "../../atom/buttons"
import Input from "../../atom/inputText/input"
import TextArea10 from "../../atom/inputText/textarea"

const Form = () =>
  <Box>
    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">E-mail</Text>
      <Input placeholder="jouw e-mail ✉️" />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">Naam</Text>
      <Input placeholder="voornaam 📛" />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">Vraag</Text>
      <TextArea10 placeholder="waarmee kan ik je helpen? 🙋" />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Button name="VERSTUUR" fill thin />
    </Box>
  </Box>

export default Form