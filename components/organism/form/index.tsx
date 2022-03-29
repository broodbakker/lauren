import React from 'react'
//components

import { Box, Form as FormGrommet, FormField } from 'grommet';

import Text from "../../atom/type/text"
import { Button } from "../../atom/buttons"
import Input from "../../atom/inputText/input"
import TextArea10 from "../../atom/inputText/textarea"

const Form = () =>
  <FormGrommet name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Box margin={{ horizontal: "", vertical: "small" }}>

      <FormField label="Email" name="email" required>
        <Input placeholder="jouw e-mail ✉️" name="email" />
      </FormField>
    </Box>

    <Box margin={{ horizontal: "", vertical: "small" }}>
      <FormField label="Name" name="name" required>
        <Input placeholder="voornaam 📛" name="name" />
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
  </FormGrommet>

export default Form