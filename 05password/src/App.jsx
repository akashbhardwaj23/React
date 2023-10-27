import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "01234567890" ;
    }
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1 ; i< length ; i++){
      const char = Math.floor( Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])


  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed,charAllowed])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl my-3 text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-3 px-3' placeholder='Password' readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} name="" id="" className='cursor-pointer' onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          {/* Important Code */}
          <input defaultChecked={numberAllowed} onChange={(e) => {
            setNumberAllowed((prev) => {
              !prev
            })
          }} type="checkbox" name="" id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          {/* Important Code */}
          <input defaultChecked={charAllowed} onChange={(e) => {
            setCharAllowed((prev) => {
              !prev
            })
          }} type="checkbox" name="" id="" />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
