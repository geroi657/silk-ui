import type { TagListItemProps } from "../types/TagListItem.types.ts";
import "../styles/TagListItem.styles.css";

export default function Tag({ id, name, action } : TagListItemProps)  {
    return (<button className={"TagListItem"} id={ id } onClick={ action ? () => action(id, name) : undefined }>{ name }</button>);
}