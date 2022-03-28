import View from "./view"
import logic from "./logic"

type InputProps = {
  placeholder: string
  name:string
}

const Input = ({ placeholder,name}: InputProps) => {
  const { handleChange, value } = logic()

  return <View value={value} name={name} handleChange={handleChange} placeholder={placeholder} />
}

export default Input