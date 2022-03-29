import { SearchInput, StandardInput } from "./view"
import logic from "./logic"

type InputProps = {
  placeholder: string
  type?: string
  bgColor?: "light" | "dark"
  name: string
}

const Input = ({ placeholder, type, bgColor, name }: InputProps) => {
  const { handleChange, value } = logic()

  if (type === "search") return <SearchInput name={name} bgColor={bgColor} value={value} handleChange={handleChange} placeholder={placeholder} />
  return <StandardInput type={type} name={name} bgColor={bgColor} value={value} handleChange={handleChange} placeholder={placeholder} />
}

export default Input