export type SideMenuItemProps = {
    id: string
    name: string
    description: string
    action: ((...args : unknown[]) => void) | undefined
}