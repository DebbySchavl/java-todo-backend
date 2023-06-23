import{Todo} from "./types.ts";
import ToDo from "./ToDo.tsx";


type Props = {
    todos: Todo[],
}
export default function ToDoList(props: Props){
    return (
        <>
            {props.todos.map((todo) => <ToDo todo={todo} key={todo.id}/>)}
        </>
    )
}