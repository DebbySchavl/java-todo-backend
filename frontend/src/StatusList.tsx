import {Todo} from "./types.ts";
import ToDoList from "./ToDoList.tsx";

type Props = {
   todos: Todo[]
}
export default function StatusList(props: Props) {
    const todos= props.todos
    const listWithStatusOpen = todos.filter(todo => todo.status === "OPEN")
    const listWithStatusDoing = todos.filter(todo => todo.status === "IN_PROGRESS")
    const listWithStatusDone = todos.filter(todo => todo.status ==="DONE")

    return(
        <>
            <h2>Open</h2>
            <ToDoList todos={listWithStatusOpen}/>
            <h2>Doing</h2>
            <ToDoList todos={listWithStatusDoing}/>
            <h2>Done</h2>
            <ToDoList todos={listWithStatusDone}/>
        </>

    )
}