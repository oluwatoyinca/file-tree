import React, {useState} from "react"
import Children from "./Children"
import { useVisibility } from "./VisibilityProvider"
import { Node } from "../types"

interface DirectoryProps {
    name: string,
    children: Node[],
    filePath: string
}

const Directory = ({name, children, filePath}: DirectoryProps) => {
  const { visible, visibilityDispatch } = useVisibility()
  
  const toggleShowChildren = () => {
    visibilityDispatch({type: 'TOGGLE', folder: filePath})
  }
  
  return (
    <li data-testid="node">
      <div data-testid="dir-expand" onClick={toggleShowChildren}>
        ⎻{visible[filePath] ? <>📂</> : <>📁</>}{name}
      </div>
      <ul>
      {visible[filePath] && <Children items={children} path={filePath} />}
      </ul>
    </li>
  )
}

export default Directory