import HeaderTitle from "./HeaderTitle.tsx";
import HeaderLogo from "./HeaderLogo.tsx";
import Button from "./Button.tsx";
import AccountButton from "./AccountButton.tsx";

import type { HeaderProps } from "../types/Header.types.ts";

export default function Header({ logoURL, siteTitle, loginModifier, registerAction, loginAction, isLoggedIn, accountClick, title } : HeaderProps) {
    return (
            <header>
            <div>
                <div>
                    { logoURL ? <HeaderLogo URL={ `${logoURL}` } alt={ `${ siteTitle ? siteTitle : "" }` }/> : null }
                    { siteTitle ? <HeaderTitle title={ siteTitle }></HeaderTitle> : null }
                </div>
                <div>
                    { loginModifier === 0 ?
                        ( isLoggedIn ?
                            <>
                                <Button buttonText={"Register"} action={ registerAction }></Button>
                                <Button buttonText={"Login"} action={ loginAction }></Button>
                            </> :
                            <AccountButton action={ accountClick } title={ title }></AccountButton>) : null
                    }
                </div>
            </div>
        </header>
    );
}