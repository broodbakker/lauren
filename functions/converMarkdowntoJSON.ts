import fs from "fs"
import { getProducts } from "./product"
//data
import { PRODUCTS_PATH } from "../shared/data"


const writeProductsToJson = () => {

  const products = getProducts(PRODUCTS_PATH)

  fs.writeFileSync('./functions/data.json', JSON.stringify(products));


}