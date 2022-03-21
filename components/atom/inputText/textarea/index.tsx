import View from "./view"
import logic from "./logic"

type InputProps = {
  placeholder: string
}

const Input = ({ placeholder }: InputProps) => {
  const { handleChange, value } = logic()

  return <View value={value} handleChange={handleChange} placeholder={placeholder} />
}

export default Input