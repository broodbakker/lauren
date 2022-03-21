import * as React from 'react'

type Action = { type: string }
type Dispatch = (action: Action) => void
type State = { shopCategory: string }
type shopCategorySelectedProviderProps = { children: React.ReactNode }

const ShopCategorySelectedStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function shopCategorySelectedReducer(state: State, action: Action) {
  if (action.type === "undefined") throw new Error(`Unhandled action type: ${action}`)
  return { shopCategory: action.type }
}

function ShopCategorySelectedProvider({ children }: shopCategorySelectedProviderProps) {
  const [state, dispatch] = React.useReducer(shopCategorySelectedReducer, {
    shopCategory: "all",
  })
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return (
    <ShopCategorySelectedStateContext.Provider value={value}>
      {children}
    </ShopCategorySelectedStateContext.Provider>
  )
}

function useShopCategorySelected() {
  const context = React.useContext(ShopCategorySelectedStateContext)
  if (context === undefined) {
    throw new Error('shopCategorySelected must be used within a shopCategorySelectedProvider')
  }
  return context
}

export { ShopCategorySelectedProvider, useShopCategorySelected }
