import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

function Profile(){
    const {user}=useContext(UserContext)
    if(!user) return(<div>Login</div>)
        else return(<div>Welcome! {user.username}</div>)
}