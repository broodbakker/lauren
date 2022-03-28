//functions
import { getProductBySlug, importStaticSlugs } from "../functions/product"
import { PRODUCTS_PATH, product1 } from "../shared/data"
//template
import ProductPage from "../components/template/productPage"
//typescript
import { Product } from "../typescript"

type ProductProps = {
  product: Product

}
const Product = ({ product }: ProductProps) => {
  return (
    <ProductPage productData={product} />
  )
}

export async function getStaticPaths() {
  const paths = importStaticSlugs(PRODUCTS_PATH)
  return {
    paths,
    fallback: false
  };
}

// params will contain the id for each generated page.
type params = {
  params: { product: string }
}

export async function getStaticProps({ params }: params) {

  console.log("test")
  const { frontMatter } = getProductBySlug(params.product, PRODUCTS_PATH);

  console.log("test1")
  return {
    props: {
      product: frontMatter
    },
  };
}

export default Product
