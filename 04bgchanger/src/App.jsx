import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  

  return (
    <>
   <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          style={{backgroundColor:"red"}} onClick={()=>{
              setColor("red");
          }} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
          <button
          style={{backgroundColor:"green"}} onClick={()=>{
            setColor("green")
          }} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
         
         
        </div>
        
      </div>
      <button onClick={()=>{
        setColor("olive")
      }} className='outline-none px-4 py-1 rounded-full shadow-lg text-black inset-x-0 my-8 ml-7 h-screen    bg-white'>Reset</button>
   </div></>
  )
}

export default App
