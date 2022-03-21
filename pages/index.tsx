//components
import HomePage from "../components/template/homePage"
//functions
import { getProducts } from "../functions"
//fake data
import { products as fakeProducts } from "../shared/data"
//typescript
import { Product } from "../typescript"
//state
import { UseProductProvider } from '../state/productProvider'

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
  const products = await getProducts(fakeProducts)
  return { props: { products } }
}

export default Home
