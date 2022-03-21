import * as React from 'react'

type Action = { type: 'open' } | { type: 'close' }
type Dispatch = (action: Action) => void
type State = { isNavMenuOpen: boolean }
type isNavMenuOpenProviderProps = { children: React.ReactNode }

const IsNavMenuOpenStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function isNavMenuOpenReducer(state: State, action: Action) {
  switch (action.type) {
    case 'open': {
      return { isNavMenuOpen: true }
    }
    case 'close': {
      return { isNavMenuOpen: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

function IsNavMenuOpenProvider({ children }: isNavMenuOpenProviderProps) {
  const [state, dispatch] = React.useReducer(isNavMenuOpenReducer, {
    isNavMenuOpen: false,
  })
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return (
    <IsNavMenuOpenStateContext.Provider value={value}>
      {children}
    </IsNavMenuOpenStateContext.Provider>
  )
}

function useIsNavMenuOpen() {
  const context = React.useContext(IsNavMenuOpenStateContext)
  if (context === undefined) {
    throw new Error('IsNavMenuOpen must be used within a IsNavMenuOpenProvider')
  }
  return context
}

export { IsNavMenuOpenProvider, useIsNavMenuOpen }
