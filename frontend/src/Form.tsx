import React from "react";
import {useState} from "react";
import axios from "axios";

type Props = {
    loadTodos:() => void
}


export default function Form(props: Props){
    const[description, setDescription] = useState("")

    function newTodo(event: React.ChangeEvent<HTMLInputElement>):void{
        setDescription(event.target.value)
    }

    function postTodos(): void {
       axios.post("/api/todo", {description: description, status: "OPEN"})
           .catch(console.error)
           .then(()=> props.loadTodos())

   }


    return(
        <>
               <input type ={description} value={description} onInput={newTodo}/>
               <button onClick={postTodos}>Add</button>
        </>
    )
}