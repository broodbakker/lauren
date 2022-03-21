import React from 'react'
import Link from 'next/link'
//atom
import Text from "../../../atom/type/title/text"

type NavLinkProp = {
  name: string
  href: string
}

const NavLink = ({ name, href }: NavLinkProp) => {
  return (
    <Link href={href}>
      <a>
        <Text >{name}</Text>
      </a>
    </Link>
  )
}

export default NavLink