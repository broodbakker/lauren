import { SearchInput, StandardInput } from "./view"
import logic from "./logic"

type InputProps = {
  placeholder: string
  type?: string
  bgColor?: "light" | "dark"
}

const Input = ({ placeholder, type, bgColor }: InputProps) => {
  const { handleChange, value } = logic()

  if (type === "search") return <SearchInput bgColor={bgColor} value={value} handleChange={handleChange} placeholder={placeholder} />
  return <StandardInput bgColor={bgColor} value={value} handleChange={handleChange} placeholder={placeholder} />
}

export default Input