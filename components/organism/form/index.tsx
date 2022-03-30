import React from 'react'
//components
import { Box  FormField} from 'grommet';

import { Button } from "../../atom/buttons"
import Input from "../../atom/inputText/input"
import TextArea10 from "../../atom/inputText/textarea"

const Form = () =>
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Box margin={{ horizontal: "", vertical: "small" }}>


      <FormField label="Email" name="email" required>
        <Input placeholder="jouw e-mail ✉️" name="email" type="email" />
      </FormField>

    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>

      <FormField label="Name" name="name" required>
        <Input placeholder="voornaam 📛" name="name" type="name"/>
      </FormField>
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>

      <FormField name="message" label="Message" required>
        <TextArea10 placeholder="waarmee kan ik je helpen? 🙋" name="message" />
      </FormField>
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <Button name="VERSTUUR" fill thin type="submit" />
    </Box>
  </form>

export default Form