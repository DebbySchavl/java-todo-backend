import {Todo} from "./types.ts";

type Props = {
    todo: Todo
}
export default function ToDo(props : Props){

    return(
        <>
            <div>{props.todo.description}</div>
        </>
    )

}