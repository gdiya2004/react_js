import {useEffect,useCallback,useState} from 'react'
function App(){
    const [length,setLength]=useState(8);
    const [characters,setCharacters]=useState(false)
    const [numbers,setNumbers]=useState(false)
    const [password,setPassword]=useState("")
        const PasswordGenenrator=useCallback(()=>{
            let pass="";
            let str="abcdefghijklmnopqrstuvwzxyAB";
            let chars="!@#$%^&*-*/";
            let numbs="1234567890";
            if(numbers) str+=numbs
            if(characters) str+=chars
            let size=str.length;
            for(let i=0; i<length; i++){
                pass+=str[Math.floor(Math.random()*size+1)]
            }
            setPassword[pass]
        },[length,characters,numbers,setPassword])
    useEffect(()=>{
        PasswordGenenrator()
    },[length,numbers,characters,PasswordGenenrator])
        return
}