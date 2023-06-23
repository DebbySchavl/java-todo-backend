import {Todo} from "./types.ts";
import axios from "axios";

type Props = {
    todo: Todo
    loadTodos:() => void
}


export default function ToDo(props : Props){
    const id = props.todo.id
    function handleDelete(){
        axios.delete(`/api/todo/${id}`)
            .catch(console.error)
            .then(()=> props.loadTodos())
    }



    return(
        <>
            <div>{props.todo.description}</div>
            <button onClick={handleDelete}>Delete</button>
        </>
    )

}