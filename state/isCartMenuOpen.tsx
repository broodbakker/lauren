import * as React from 'react'

type Action = { type: 'open' } | { type: 'close' }
type Dispatch = (action: Action) => void
type isCartMenuOpenProviderProps = { children: React.ReactNode }
type State = { isCartMenuOpen: boolean }


const IsCartMenuOpenStateContext = React.createContext
  <{ state: State; dispatch: Dispatch } | undefined>(undefined)

function isCartMenuOpenReducer(state: State, action: Action) {

  switch (action.type) {
    case 'open': {
      return { isCartMenuOpen: true }
    }
    case 'close': {
      return { isCartMenuOpen: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

function IsCartMenuOpenProvider({ children }: isCartMenuOpenProviderProps) {
  const [state, dispatch] = React.useReducer(isCartMenuOpenReducer, {
    isCartMenuOpen: false,
  })
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return (
    <IsCartMenuOpenStateContext.Provider value={value}>
      {children}
    </IsCartMenuOpenStateContext.Provider>
  )
}

function useIsCartMenuOpen() {
  const context = React.useContext(IsCartMenuOpenStateContext)
  if (context === undefined) {
    throw new Error('IsCartMenuOpen must be used within a IsCartMenuOpenProvider')
  }
  return context
}

export { IsCartMenuOpenProvider, useIsCartMenuOpen }
