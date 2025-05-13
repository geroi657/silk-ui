import SideMenuItem from "./SideMenuItem.tsx";
import type { SideMenuProps } from "../types/SideMenu.types.ts";
import "../styles/SideMenu.styles.css";

export default function SideMenu({ SideMenuItems, action } : SideMenuProps) {
    return (
        <div className={ "SideMenu" }>
            { SideMenuItems ? SideMenuItems.map((item) => (<SideMenuItem id={ item.id } name={ item.name } action={ action } description={ item.description }></SideMenuItem>)) : null }
        </div>
    );
}