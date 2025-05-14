import SideMenuItem from "./SideMenuItem";
import type { SideMenuProps } from "../types/SideMenu.types.ts";
import "../styles/SideMenu.styles.css";

export default function SideMenu({ SideMenuItems, action } : SideMenuProps) {
    return (
        <div className={ "SideMenu" }>
            { SideMenuItems ? SideMenuItems.map((item) => (
                <SideMenuItem key={ item.id }
                              id={ item.id }
                              name={ item.name }
                              action={ action }
                              description={ item.description }/>
            )) : null }
        </div>
    );
}