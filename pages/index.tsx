//components
import HomePage from "../components/template/homePage"
//functions
import { getProducts } from "../functions/product"
//typescript
import { Product } from "../typescript"
//state
import { UseProductProvider } from '../state/productProvider'
//data
import { PRODUCTS_PATH } from "../shared/data"

type HomeProps = {
  products: Product[]
}

const Home = ({ products }: HomeProps) => {
  return (
    <UseProductProvider products={products}>
      <HomePage />
    </UseProductProvider>
  )
}

export async function getStaticProps() {
  const products = await getProducts(PRODUCTS_PATH)
  return { props: { products } }
}

export default Home
