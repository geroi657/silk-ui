export type ButtonProps = {
    buttonText: string | undefined,
    action: ((...args : unknown[]) => void) | undefined
}