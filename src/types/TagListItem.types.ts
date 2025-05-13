export type TagListItemProps = {
    id: string,
    name: string,
    action: ((...args : unknown[]) => void) | undefined
}