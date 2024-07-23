import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    username:"diya",
    age:"20"
  }
  let newArr=[1,2,3];
return(
  <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >TailWind Test</h1>
  <Card channel="chaiaurcode" someObj={myObj} somearr={newArr}/>
  <Card username="diya" btnText="click me"/>
  <Card username="khyati" btnText="visit me"/>

  </>
)
}

export default App
