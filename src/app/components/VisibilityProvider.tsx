import useVisibilityReducer from "../customhooks/useVisibilityReducer"
import React, { useContext } from "react"
import { VisibileState, VisibilityAction } from "../types"

type VisibilityContextType = {
    visible: VisibileState
    visibilityDispatch: React.Dispatch<VisibilityAction>
}

export const VisibilityContext = React.createContext<VisibilityContextType | undefined>(undefined)

interface VisibilityProviderProps {
    children: React.ReactNode
}

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({ children }) => {
  const [visible, visibilityDispatch] = useVisibilityReducer()

  return (
    <VisibilityContext.Provider value={{ visible, visibilityDispatch }}>
      {children}
    </VisibilityContext.Provider>
  )
}

export const useVisibility = () => {
  const visibilityCtx = useContext(VisibilityContext)

  if (!visibilityCtx) {
    throw new Error("Component beyond VisibilityContext!")
  }
  
  return visibilityCtx
}
