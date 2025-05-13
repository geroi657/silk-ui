export type AccountButtonProps = {
    action: (...args : unknown[]) => void,
    title: string | undefined
}