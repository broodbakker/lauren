//components
import Over_mijPage from "../components/template/over_mijPage"
//functions
import { getProducts } from "../functions"
//fake data
import { products as fakeProducts } from "../shared/data"
//typescript
import { Product } from "../typescript"
//state
import { UseProductProvider } from '../state/productProvider'

type Over_mijProps = {
  products: Product[]
}

const Over_mij = ({ products }: Over_mijProps) => {
  return (
    <UseProductProvider products={products}>
      <Over_mijPage />
    </UseProductProvider>
  )
}

export async function getStaticProps() {
  const products = await getProducts(fakeProducts)
  return { props: { products } }
}

export default Over_mij
