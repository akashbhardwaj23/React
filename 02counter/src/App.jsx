import { useState } from 'react'

import './App.css'

function App() {
  const [counter , setCounter] = useState(15)
//  let counter = 15;
 const addValue = ()=>{
   setCounter(prevcounter => prevcounter+1);
   setCounter(prevcounter => prevcounter+1);
  //  setCounter((prevCounter) => {
  //   prevCounter+1;
  //  });
  //  setCounter((prevCounter) => {
  //   prevCounter+1;
  //  });
 }
 const removeValue = ()=>{
  setCounter(counter - 1);
 }



 function reset (){
  setCounter(15)
 }
  return (
    <>
      <h1>React Course {counter} </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Button</button> {" "}
      <button onClick={removeValue}>Remove Value</button> {" "}
      <button onClick={reset}>Reset</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
