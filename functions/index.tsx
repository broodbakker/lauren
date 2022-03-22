import { Product, SnipCartButton } from "../typescript"
import fs from 'fs'

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


export const makeStaticPathsParam = (slug: string) => ({
  params: { product: slug },
})

export const getPostFileNames = (filePath:string) => {
  const postFileNames = fs.readdirSync(filePath).map((file) => {
    return file
  })
  return postFileNames
}

export const importPostSlugs = (filePath:string) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.mdx?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((product) => ({ params: { product } }));


export const getPost = () => 4

