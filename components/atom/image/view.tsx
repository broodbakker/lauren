import styled from "styled-components"

type ImgProps = {
  src: string
  alt: string
}

const Container = styled.img`
  position:absolute;
  width:100%;
  height:100%;
  object-fit: cover;
`
const Img = ({ src, alt }: ImgProps) =>
  <Container
    src={src}
    alt={alt}
  />

export default Img

  //   <Image
//   src={src}
//   alt={alt}
//   layout="fill"
//   objectFit="cover"
// />