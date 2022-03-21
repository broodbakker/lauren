import React from 'react';

import { useProduct } from '../../../../state/productProvider'
import { useShopCategorySelected } from '../../../../state/shopCategorySelected'

import { calculateOptions } from "../../../../functions"

const logic = () => {
  const { dispatch } = useShopCategorySelected()

  const products = useProduct()

  const options = calculateOptions(products)

  const [value, setValue] = React.useState("alle")

  const handleChange = ({ option }) => {
    setValue(option)
    dispatch({ type: option })
  }

  return { value, handleChange, options }
}

export default logic

