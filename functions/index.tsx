import { Product, SnipCartButton } from "../typescript"

export const getProducts = (products: Product[]) => {
  return products
}

export const ProductToSnipcartData = (props: Product): SnipCartButton => ({
  className: "snipcart-add-item",
  "data-item-id": props.id,
  "data-item-price": props.price,
  "data-item-url": props.url,
  "data-item-description": props.description,
  "data-item-image": props.image,
  "data-item-name": props.image
})

export const calculateOptions = (products: Product[]): string[] => products.reduce((res, product) =>
  (res.includes(product.category) ? res : [...res, product.category]), ["alle"]);

export const selectProducts = (category: string, products: Product[]): Product[] => {
  if (category === "all") return products

  return selectCategory(category, products)
}

const selectCategory = (category: string, products: Product[]) => products.reduce((res, product) => {
  return product.category === category ? [...res, product] : res
}, []);






