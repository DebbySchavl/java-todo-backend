
import {useState, useEffect} from "react";
import axios from "axios";
import StatusList from "./StatusList.tsx";
import Form from "./Form.tsx";


export default function App() {
    const[todos, setTodos] = useState([])

    function loadTodos(): void{
        axios.get("/api/todo")
            .then(response => response.data)
            .catch(console.error)
            .then(data => setTodos(data))
    }

    useEffect(loadTodos, [])

    return (
        <>
            <h3>ToDos</h3>
            <StatusList todos={todos} />
            <Form />
        </>
    )

}
