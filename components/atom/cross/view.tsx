import React, { FunctionComponent } from 'react';

import { Anchor } from "grommet"

import { Close } from 'grommet-icons';

type CrossProps = {
  handleClick: () => void
}

const Cross: FunctionComponent<CrossProps> = ({ handleClick }: CrossProps) => {
  return (
    <Anchor href="#" label="" margin="none"  icon={<Close size='medium' />}
      color="iconColor" onClick={handleClick} />
  )
}

export default Cross