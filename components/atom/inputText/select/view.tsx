import React from 'react';

import { Box, Select } from 'grommet';

type SelectProps = {
  options: string[]
  handleChange: ({ option }) => void
  value: string
}

const View = ({ options, handleChange, value }: SelectProps) => {
  return (
    <Box fill align="center" justify="start" pad="large" gap="medium">
      <Select
        id="select"
        name="select"
        placeholder="Select"
        value={value}
        options={options}
        onChange={handleChange}
      />
    </Box>
  );
};

export default View