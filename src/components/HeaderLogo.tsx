import type { HeaderLogoProps } from "../types/HeaderLogo.types.ts";

export default function HeaderLogo({ URL, alt } : HeaderLogoProps) {
    return (<img src={ URL } alt={ alt }/>);
}