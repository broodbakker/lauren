//functions
import { importPostSlugs, getParsedFileContentBySlug } from "../functions/content"
import { CONTENT_PATH, product1 } from "../shared/data"
//template
import ProductPage from "../components/template/productPage"

type ProductProps = {
  product: any

}

const Product = ({ product }: ProductProps) => {
  console.log(product, "product")
  return (
    <ProductPage productData={product} />
  )
}

export async function getStaticPaths() {
  const paths = importPostSlugs(CONTENT_PATH)
  return {
    paths,
    fallback: false
  };
}


// params will contain the id for each generated page.
type params = {
  params: { product: string }
  locales: any
  locale: any
  defaultLocale: any
}


export async function getStaticProps({ params }: params) {
  const product = getParsedFileContentBySlug(params.product, CONTENT_PATH);

  return {
    props: {
      product: product.frontMatter
    },
  };
}

export default Product
