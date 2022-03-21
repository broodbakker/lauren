//components
import WinkelPage from "../components/template/winkelPage"
//functions
import { getProducts } from "../functions"
//fake data
import { products as fakeProducts } from "../shared/data"
//typescript
import { Product } from "../typescript"
//state
import { UseProductProvider } from '../state/productProvider'

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
  const products = await getProducts(fakeProducts)
  return { props: { products } }
}

export default Winkel
