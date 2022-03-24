export type Product = {
  id: string
  price: string
  url: string
  description: string
  image: string[]
  name: string
  date: string
  tags?: string[]
  slug: string
  category: string
}

export type SnipCartButton = {
  className: string
  "data-item-id": string
  "data-item-price": string
  "data-item-url": string
  "data-item-description": string
  "data-item-image": string
  "data-item-name": string
}

