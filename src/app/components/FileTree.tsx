import React from "react"
import Directory from "./Directory"
import { Node } from "../types"

interface FileTreeProps {
    root: Node
}

const FileTree = ({root}: FileTreeProps) => {
  return (
      <ul>
        <Directory key={0} name={root.name} children={root.children ?? []} filePath={root.name} />
      </ul>
  )
}

export default FileTree