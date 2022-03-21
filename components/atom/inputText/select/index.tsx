import React from 'react';

import View from "./view"
import logic from "./logic"

const Select = () => {
  const { options, handleChange, value } = logic()
  return (
    <View options={options} handleChange={handleChange} value={value} />
  );
};

export default Select