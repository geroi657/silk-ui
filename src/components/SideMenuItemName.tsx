import type { SideMenuItemNameProps } from "../types/SideMenuItemName.types.ts";
import "../styles/SideMenuItemName.styles.css"

export default function SideMenuItemName({ name } : SideMenuItemNameProps ) {
    return (
        <p className={ "SideMenuItemName" }>{ name }</p>
    );
}