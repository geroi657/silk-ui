export type HeaderProps = {
    siteTitle: string,
    loginModifier: boolean,
    loginName: string,
    registerName: string,
    registerAction: ((...args : unknown[]) => void) | undefined
    loginAction: ((...args : unknown[]) => void) | undefined
    isLoggedIn: boolean,
    accountClick: ((...args : unknown[]) => void),
    title: string
}