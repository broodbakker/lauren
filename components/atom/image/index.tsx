//atom
import Image from "./view"
//constants
import { TIME_TILL_HIDDEN_BG, LOADING_IMAGE, LOADING_ALT } from "../../../shared/data"
//hooks
import useTimeLeft from "../../../hooks/useTimeLeft"

type backgroundImageProps = {
  src: string
  alt: string
}

const Img = ({ src, alt, }: backgroundImageProps) => {
  const timeLeft = useTimeLeft(TIME_TILL_HIDDEN_BG)
  return (
    <>
      {timeLeft !== 0 && <Image
        src={LOADING_IMAGE}
        alt={LOADING_ALT}
      />}
      <Image
        src={src}
        alt={alt}
      />
    </>
  )
}

export default Img


