type SideMenuItem = {
    id: string
    name: string
    description: string
}

export type SideMenuProps = {
    SideMenuItems: SideMenuItem[]
    action: ((...args : unknown[]) => void) | undefined
}