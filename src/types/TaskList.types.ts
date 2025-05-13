type Tag = {
    id: string,
    name: string
}

type TaskListItem = {
    id: string
    name: string
    description: string
    tags: Tag[]
    responsible: string
}

export type TaskListProps = {
    ListName: string
    TaskListItems: TaskListItem[];
}