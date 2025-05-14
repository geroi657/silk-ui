import TaskListName from "./TaskListName";
import TaskListItem from "./TaskListItem";
import "../styles/TaskList.styles.css"

import type { TaskListProps } from "../types/TaskList.types.ts";

export default function TaskList({ ListName, TaskListItems } : TaskListProps) {
    return (
        <div className={ "TaskListContainer" }>
            <TaskListName name={ ListName }/>
            <div className={ "TaskList" }>
                {TaskListItems ? TaskListItems.map((item) => (
                <TaskListItem tags={item.tags}
                              name={item.name}
                              description={item.description}
                              responsible={item.responsible}
                              key={item.id}/>
                )) : <p>No tasks here yet</p>}
            </div>
        </div>
    );
}