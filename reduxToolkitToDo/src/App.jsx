import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'

function App() {
  const [update,setUpdate] = useState('Add Todo')

  return (
    <>
      <h1>Chai Aur Redux ToolKit</h1>
      <AddToDo update={update}/>
      <ToDo  updateObj={{update,setUpdate}}/>
    </>
  )
}

export default App
