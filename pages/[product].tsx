//components
// import HomePage from "../components/template/homePage"
//functions
import {  importPostSlugs,getPost } from "../functions"
import {CONTENT_PATH} from "../shared/data"

// //typescript
// import { Product } from "../typescript"
// //state
// import { UseProductProvider } from '../state/productProvider'

type HomeProps = {
}

const Home = ({ }: HomeProps) => {
  return (
    <div >
      test
    </div>
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
  const post = await getPost(params.product);
  
  return {
    props: {
      product: 4
    },
  };
}

export default Home
