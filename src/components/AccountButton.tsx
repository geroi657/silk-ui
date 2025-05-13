import type { AccountButtonProps } from "../types/AccountButton.types.ts";
import "../styles/AccountButton.styles.css";

export default function AccountButton({ action, title } : AccountButtonProps) {
    return (<button className={ "AccountButton" } onClick={ () => { action() } }>{ title }</button>);
}