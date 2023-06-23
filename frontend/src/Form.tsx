import React from "react";
import {useState} from "react";
export default function Form(){
    const[text, setText] = useState("")

    function newTodo(event: React.ChangeEvent<HTMLInputElement>):void{
        setText(event.target.value)
    }

    return(
        <>
            <input type = "text" onInput={newTodo}/>
            add new Task {text}

        </>
    )
}