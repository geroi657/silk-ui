import SideMenuItemDescription from "./SideMenuItemDescription.tsx";
import SideMenuItemName from "./SideMenuItemName.tsx";
import type { SideMenuItemProps } from "../types/SideMenuItem.types.ts";
import "../styles/SideMenuItem.styles.css";

export default function SideMenuItem({ id, name, description, action } : SideMenuItemProps) {
    return (
        <button className={ "SideMenuItem" } onClick={action ? () => action(id, name, description) : undefined}>
            <SideMenuItemName name={ name }></SideMenuItemName>
            <SideMenuItemDescription description={ description } ></SideMenuItemDescription>
        </button>
    );
}