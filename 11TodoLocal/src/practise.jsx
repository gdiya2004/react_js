import { useState } from "react";

function App(){
    const [todos,setTodos]=useState([]);

    const addTodo=(todo)=>{
        setTodos((prevTodos)=>[{id:Date.now(), ...todo},...prevTodos])
    }
    const updateTodo=(todo,id)=>{
        setTodos((prevtodos)=>prevtodos.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
    }
    const deleteTodo=(id)=>{
        setTodos((prevtodos=>prevtodos.filter((prevtodo)=>prevtodo.id!==id)))
    }
    const tooggleComplete=(id)=>{
        setTodos((prev)=>
        prev.map((prevTodo)=>prevTodo.id===id?
        {...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }
    useEffect(()=>{
        const todos=JSON.parse(localstorage.getItem("todos"))
        if(todos && todos.length>0){
            setTodos(todos)
        }
    },[])
    useEffect(()=>{
        localstorage.setItem("todos",JSON.stringify(todos))
    },[todos])
}


function TodoForm(){
    const [todo,setTodo]=useState("")
    const {addTodo} =useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo("")
    }
}

function TodoItem({todo}){
    const {updateTodo,ToggleTodo,deleteTodo}=useTodo()
    const [isEditable,setisEditable]=useState(false)
    const [todoMssg,setTodomssg]=useState(todo.todo)
}






















































