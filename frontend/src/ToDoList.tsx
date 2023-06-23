import{Todo} from "./types.ts";
import ToDo from "./ToDo.tsx";


type Props = {
    todos: Todo[],
    loadTodos:() => void
}
export default function ToDoList(props: Props){
    return (
        <>
            {props.todos.map((todo) => <ToDo loadTodos={props.loadTodos} todo={todo} key={todo.id}/>)}
        </>
    )
}