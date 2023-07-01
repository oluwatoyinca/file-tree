import { useReducer } from "react"
import { VisibileState, VisibilityAction } from "../types"

const useVisibilityReducer = (): [VisibileState, React.Dispatch<VisibilityAction>] => {
  const visibilityReducer = (state: VisibileState, action: VisibilityAction): VisibileState => {
    switch (action.type) {
      case "TOGGLE":
        if (state[action.folder] === undefined) {
          return {...state, [action.folder]: true}
        } else {
          return {...state, [action.folder]: !state[action.folder]}
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(visibilityReducer, {})
  
  return [state, dispatch]
}

export default useVisibilityReducer