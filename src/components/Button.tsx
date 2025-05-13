import type { ButtonProps } from "../types/Button.types.ts";

export default function Button({ buttonText, action } : ButtonProps) {
    return (<button onClick={ action ? () => action() : undefined }>{ buttonText ? buttonText : ""}</button>);
}