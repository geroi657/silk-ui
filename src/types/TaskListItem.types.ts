type Tag = {
    id: string,
    name: string
}

export type TaskListItemProps = {
    tags: Tag[],
    name: string,
    description: string,
    responsible: string
}