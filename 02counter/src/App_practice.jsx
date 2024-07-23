import { useState } from 'react'
import './App.css'

function App(){
    let [counter,setCounter]=useState(0);

    function addbutton(){
        if(counter==20) return;
        setCounter(++counter);
        console.log("added")
    }
    function removebutton(){
        if(counter<=0) return;
        setCounter(counter-1);
        console.log("removed")
    }
    return(
        <>
        <h1>Counting Project</h1>
        <h3>0-20</h3>
        <button onClick={addbutton}> Add Counter:{counter}</button>
        <button onClick={removebutton}>Remove Counter:{counter}</button>
        </>
    )
}
export default App