import React from 'react';
import { Box } from "grommet"
//atom
import Icon from "../../../atom/icons"

const ContactInformation = () =>
  <Box pad="large" background="primaryDark">

    {/* Contact */}
    <Box margin={{ vertical: "small" }} direction="row">
      <Icon name="Contact Ons" type="menu" color="light" />
    </Box>

    {/* over mij */}
    <Box margin={{ vertical: "small" }} direction="row">
      <Icon name="Over Mij" type="circle" color="light" />
    </Box>

    {/*FAQ */}
    <Box margin={{ vertical: "small" }} direction="row">
      <Icon name="FAQ" type="search" color="light" />
    </Box>

  </Box>


export default ContactInformation