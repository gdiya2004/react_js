import {useState} from 'react'

function App(){
    const[color,setColor]=useState("blue")
    return(
        <>
        <div className='w-full h-screen duration-200'
      style={{backgroundColor:{color}}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
            <button onClick={()=>{setColor("pink")}} className='outline-none px-4 text-white' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>{setColor("green")}}className='outline-none px-4 text-white' style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>{setColor("red")}} className='outline-none px-4 text-white' style={{backgroundColor:"red"}}>Red</button>
          </div>
        </div>
    </div>
        </>
    )
}