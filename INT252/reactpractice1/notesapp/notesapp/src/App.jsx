import React, { useState } from 'react'
import Addnote from './components/Addnote'
import NotesList from './components/NotesList'
import Increment from './components/Increment'
import Decrement from './components/Decrement'

const App = () => {


  const [task,setTask]=useState([])

  const addNote=(title,detail)=>{
    const copytask=[...task]
    copytask.push({title,detail})
    setTask(copytask)
  
  }


  const deleteNode= (idx)=>{

    const copytask=[...task]
    copytask.splice(idx,1)
    setTask(copytask)


  }



  return (
    <>
    <div className='flex'>
      
      <Addnote addNote={addNote}/>
      <NotesList task={task} deleteNode={deleteNode}/>
    </div>



    {/* <div className="flex w-full h-screen justify-around items-center bg-gray-100">
        <p>{count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={dec}>Decrement</button>
    </div> */}
    </>
  )
}

export default App
