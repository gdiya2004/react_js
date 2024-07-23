import { useState } from 'react'
import './App.css'

// function ProblematicApp(){
//   let counter=15;
//   const addValue=()=>{
//     counter+=1;//counter variable ki value update horhi hai
//     //  but UI mein updation nhi ho rhe
//   }
//   const removeValue=()=>{
//     counter-=1;
//   }
//   return(
//     <>
//     <h1>CounteValue: {counter}</h1>
//     <button onClick={addValue}>Add Value</button>
//     <br/>
//     <button onClick={removeValue}>Remove Value</button>
//     <p>Footer:{counter}</p>
//     </>
//   )
// }


// function App() {
    //useState updation UI ko batches mein bhejta hai due to fibre
    //15 is default value
  // let [counter,setCounter] = useState(15)

  // const addValue=()=>{
  //   console.log("clicked",counter)
  //   // useState changes batches mein bhejta hai
  //   //ek hi kaam baar baar repeat ho rha hai
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  // }

//updation more than one.
// const addValue=()=>{
//     console.log("clicked",counter)
//   //setCounter callback function leta hai
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//     setCounter((prevCounter)=>prevCounter+1)
//   }

  // const addValue=()=>{
  //   setCounter(counter+1)
  // }

//   const removeValue=()=>{
//     setCounter(counter--)
//   }

// return(
//   <>
//   <h1>Chai aur React</h1>
//   <h2>Counter value:{counter}</h2>
//   <button onClick={addValue}>Add Value{counter}</button>
//   <br/>
//   <button onClick={removeValue}>Remove Value{counter}</button>
//   <p>footer:{counter}</p>
//   </>
// )}

// export default App
