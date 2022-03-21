import React from 'react';

const logic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => setValue(event.target.value)

  return { value, handleChange }
}

export default logic