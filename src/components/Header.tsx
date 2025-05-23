import HeaderTitle from "./HeaderTitle";
import Button from "./Button";
import AccountButton from "./AccountButton";
import type { HeaderProps } from "../types/Header.types.ts";
import "../styles/Header.styles.css";

export default function Header({ siteTitle, loginModifier, registerAction, loginAction, registerName, loginName, isLoggedIn, accountClick, title } : HeaderProps) {
    return (
        <header className={ "Header" }>
            <div>
                { siteTitle ? <HeaderTitle title={ siteTitle }></HeaderTitle> : null }
            </div>
            <div className={ "HeaderButtonContainer" }>
                { loginModifier ?
                    ( !isLoggedIn ?
                        <>
                            <Button buttonText={ registerName } action={ registerAction }></Button>
                            <Button buttonText={ loginName } action={ loginAction }></Button>
                        </> :
                        <AccountButton action={ accountClick } title={ title }></AccountButton>) : null
                }
            </div>
        </header>
    );
}