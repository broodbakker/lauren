import React from 'react'
import View from "./view"
import logic from "./logic"

type ButtonProps = {
}

const Button = ({ }: ButtonProps) => {
  const { handleMin, handlePlus, amount } = logic()
  return (
    <View handleMin={handleMin} handlePlus={handlePlus} amount={amount} />
  )
}

export default Button