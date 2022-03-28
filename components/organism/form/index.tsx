import React from 'react'
//components
import { Box, } from "grommet"

import Text from "../../atom/type/text"
import { Button } from "../../atom/buttons"
import Input from "../../atom/inputText/input"
import TextArea10 from "../../atom/inputText/textarea"

const Form = () =>
  <form name="contact" action="/success" method="POST" data-netlify="true">
    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">E-mail</Text>
      <Input placeholder="jouw e-mail ✉️" type="email" name="email"  />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">Naam</Text>
      <Input placeholder="voornaam 📛" type="text" name="name" />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Text size="medium">Vraag</Text>
      <TextArea10 placeholder="waarmee kan ik je helpen? 🙋" name="message" />
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Button name="VERSTUUR" fill thin type="submit" />
    </Box>
  </form>

export default Form