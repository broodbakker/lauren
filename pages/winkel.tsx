//components
import WinkelPage from "../components/template/winkelPage"
//functions
import { getProducts } from "../localFunctions/product"
//typescript
import { Product } from "../typescript"
//state
import { UseProductProvider } from '../state/productProvider'
import { PRODUCTS_PATH } from "../shared/data"

type WinkelProps = {
  products: Product[]
}

const Winkel = ({ products }: WinkelProps) => {
  return (
    <UseProductProvider products={products}>
      <WinkelPage />
    </UseProductProvider>
  )
}

export async function getStaticProps() {
  const products = await getProducts(PRODUCTS_PATH)
  return { props: { products } }
}

export default Winkel
