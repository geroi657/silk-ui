import type { TaskListItemProps } from "../types/TaskListItem.types.ts";
import "../styles/TaskListItem.styles.css";

export default function TaskListItem({ tags, name, description, responsible } : TaskListItemProps) {
    return (
        <div className={ "TaskListItem" }>
            <div className={ "TaskListItemTags" }>
                {tags ? tags.map((item) => (
                    <p className={"TaskListItemTag"} key={item.id}>{item.name}</p>
                )) : null}
            </div>
            <p className={ "TaskListItemName" }>{ name }</p>
            <p className={ "TaskListItemDescription" }>{ description }</p>
            <p className={ "TaskListItemResponsible" }>{ responsible }</p>
        </div>
    );
}