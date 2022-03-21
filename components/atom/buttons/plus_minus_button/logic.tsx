import { useState } from 'react';

const Logic = () => {
  const [amount, setAmount] = useState(0)

  const handlePlus = () => {
    setAmount(amount + 1)
  }

  const handleMin = () => {
    if (0 >= amount) return setAmount(amount)
    setAmount(amount - 1)
  }

  return { handlePlus, handleMin, amount }

}

export default Logic

