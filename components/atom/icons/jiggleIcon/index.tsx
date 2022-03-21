import React from 'react'

import JiggleIcon from './view';

type IconProps = {
  src: string

}

const Icon = ({ src }: IconProps) => {
  return (
    <JiggleIcon src={src} />
  )
}

export default Icon