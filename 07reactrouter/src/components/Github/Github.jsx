import React from 'react'
// import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/gdiya2004')
    //     .then((res)=>res.json())
    //     .then(data=>setdata(data))
    // },[])
return(
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git pic" width="300" />
    </div>
)
}
export default Github

export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/gdiya2004')
   return response.json()
}