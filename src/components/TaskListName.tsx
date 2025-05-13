import type { TaskListNameProps } from "../types/TaskListName.types.ts";
import "../styles/TaskListName.styles.css"

export default function TaskListName({ name } : TaskListNameProps) {
    return (
        <p className={"TaskListName"}>{ name }</p>
    );
}