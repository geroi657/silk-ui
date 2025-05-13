import type { AccountButtonProps } from "../types/AccountButton.types.ts";

export default function AccountButton({ action, title } : AccountButtonProps) {
    return (<button onClick={ () => { action() } }>{ title }</button>);
}