import React from "react"
import Directory from "./Directory"
import File from "./File"
import { Node } from "../types"

interface ChildrenProps {
    items: Node[],
    path: string
}
 
const Children = ({items, path}: ChildrenProps): JSX.Element => {
  const nodes: JSX.Element[] = []
  items.map((child, index) => {
    if (child.type === "dir") {
      nodes.push(
        <Directory 
          key={index} 
          name={child.name} 
          children={child.children ?? []} 
          filePath={`${path}/${child.name}`}
          />
      )
    }
    else { 
      nodes.push(<File key={index} name={child.name} />) 
    }
  })
  
  return (
    <>
      {nodes}
    </>
  )
}

export default Children