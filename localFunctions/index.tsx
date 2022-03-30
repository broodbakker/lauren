import { Product}  from "../typescript"

export const calculateOptions = (products: Product[]): string[] => products.reduce((res, product) =>
  (res.includes(product.category) ? res : [...res, product.category]), ["alle"]);

export const selectProducts = (category: string, products: Product[]): Product[] => {
  if (category === "all") return products

  return selectCategory(category, products)
}

const selectCategory = (category: string, products: Product[]) => products.reduce((res, product) => {
  return product.category === category ? [...res, product] : res
}, []);

