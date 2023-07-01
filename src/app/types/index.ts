export interface Node {
    type: "dir" | "file",
    name: string,
    children?: Node[]
}

export type VisibileState = {
    [key: string]: boolean
}

export interface VisibilityToggleAction {
    type: 'TOGGLE',
    folder: string
}

export type VisibilityAction =
    | VisibilityToggleAction