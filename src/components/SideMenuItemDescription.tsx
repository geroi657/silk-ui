import type { SideMenuItemDescriptionProps } from "../types/SideMenuItemDescription.types.ts";
import "../styles/SideMenuItemDescription.styles.css";

export default function SideMenuItemDescription({ description }: SideMenuItemDescriptionProps) {
    return (
        <p className={ "SideMenuItemDescription" }>{ description }</p>
    );
}