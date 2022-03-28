
import React from 'react'

import { NormalButton, ArrowButton } from "./view"
import { Product } from "../../../typescript"
//function
import { ProductToSnipcartData } from "../../../functions/product"
//atom
import Link from "../link"

type ButtonProps = {
  name: string
  fill?: boolean
  thin?: boolean
  handleClick?: () => void
  icon?: string
  type?: string
}
const Button = ({ icon, ...props }: ButtonProps) => {
  if (icon === "arrow") return <ArrowButton {...props} />

  return <NormalButton {...props} />
}

type PaymentButtonProps = {
  name: string
  fill?: boolean
  thin?: boolean
  handleClick?: () => void
  icon?: string
  productData: Product
}

const PaymentButton = ({ icon, productData, ...props }: PaymentButtonProps) => {
  const snipCartData = ProductToSnipcartData(productData)

  console.log(snipCartData)

  if (icon === "arrow") return <ArrowButton {...props} {...snipCartData} />

  return <NormalButton {...props} {...snipCartData} />
}

type LinkButtonProps = {
  name: string
  fill?: boolean
  thin?: boolean
  handleClick?: () => void
  icon?: string
  href: string
  type?: string
}

const LinkButton = ({ icon, href, ...props }: LinkButtonProps) => {
  if (icon === "arrow") return (
    <Link href={href}>
      <ArrowButton {...props} href={href} />
    </Link>
  )

  return (
    <Link href={href}>
      <NormalButton {...props} href={href} />
    </Link>
  )

}

export { Button, PaymentButton, LinkButton }



