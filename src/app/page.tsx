"use client"
import Image from 'next/image'
// import styles from './page.module.css'
import FileTree from './components/FileTree'
import { Node } from "./types"
import { VisibilityProvider } from "../app/components/VisibilityProvider"

const root: Node = {
  type: "dir",
  name: "foo",
  children: [
    {
      type: "dir",
      name: "toyin",
      children: [
        {
          type: "file",
          name: "tosin"
        }
      ]
    },
    {
      type: "dir",
      name: "favour",
      children: [
        {
          type: "dir",
          name: "brent",
          children: []
        },
        {
          type: "file",
          name: "grace"
        }
      ]
    },
    {
      type: "file",
      name: "glory"
    },
    {
      type: "file",
      name: "shully"
    }
  ]
}

export default function Home() {
  return (
    <VisibilityProvider>
      <FileTree root={root} />
    </VisibilityProvider>
  )
}
