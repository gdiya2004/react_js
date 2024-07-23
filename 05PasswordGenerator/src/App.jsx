import { useState } from 'react'
import { useCallback ,useEffect,useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmlnopqrtsuvwxyz"
    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*/";
    for (let i = 1; i <=  length ; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, number, characters,setPassword])//optimise krne ke lie hai

  //agr inmein koi bhi cher char ho toh dobara se run krdo
  useEffect(()=>{
    passwordGenerator()
  },[length,number,characters,passwordGenerator])

//Now we want to copy password to clipboard
//useRef
const passwordRef=useRef(null);
const copyPasswordToClipboard= useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password);
},[password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto my-6 px-4  py-3 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white mb-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3 max-w-md mx-auto' placeholder='Password' readOnly ref={passwordRef}/>
          <button className="bg-blue-700 text-white px-3 py-0.5" onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={10} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} /><label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={() => { setNumber((prev) => !prev) }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={characters} id="characterInput" onChange={() => { setCharacters((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
