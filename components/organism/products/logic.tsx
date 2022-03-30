import { useProduct } from '../../../state/productProvider'
import { useShopCategorySelected } from '../../../state/shopCategorySelected'
//functions
import { selectProducts } from "../../../localFunctions"

export const Logic = () => {
  const products = useProduct()

  return products
}

export const WinkelLogic = () => {
  const products = useProduct()
  const { state } = useShopCategorySelected()

  const selectedProducts = selectProducts(state.shopCategory, products)

  return selectedProducts
}
