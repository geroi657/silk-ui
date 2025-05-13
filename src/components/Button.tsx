import type { ButtonProps } from "../types/Button.types.ts";
import "../styles/Button.styles.css";

export default function Button({ buttonText, action } : ButtonProps) {
    return (<button className={ "Button" } onClick={ action ? () => action() : undefined }>{ buttonText !== undefined ? buttonText : ""}</button>);
}