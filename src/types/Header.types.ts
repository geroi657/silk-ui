export type HeaderProps = {
    logoURL: string,
    siteTitle: string,
    loginModifier: 0,
    registerAction: ((...args : unknown[]) => void) | undefined
    loginAction: ((...args : unknown[]) => void) | undefined
    isLoggedIn: boolean,
    accountClick: ((...args : unknown[]) => void),
    title: string
}