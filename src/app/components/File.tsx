import React from "react"

interface FileProps {
    name: string
}

const File = ({name}: FileProps) => {
  return (
    <li data-testid="node">
      <div>⎻📄{name}</div>
    </li>
  )
}

export default File