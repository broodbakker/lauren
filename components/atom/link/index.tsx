import React, {  ReactChildren, ReactChild } from "react"
import Link from 'next/link'

type TextProps = {
  children: ReactChild | ReactChildren;
  href:string
}
const Link1 = ({href, children}:TextProps) => {
  return (
            <Link href={href}>
                {children}
            </Link>
  )
}

export default Link1