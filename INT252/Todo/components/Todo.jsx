import React, { useState } from 'react'

const Todo = () => {
    let [input,setInput]=useState()
    function handleInput(){

    } 
  return (
    <div>
      <div className='p-5 text-center space-x-7'>
        <input onChange={(e)=>{setInput(e.target.value)}} type="text" />
        <button onClick={handleInput} className='text-white p-3 text-3xl border rounded bg-blue-900'></button>
      </div>
      <div className='p-4 text-4xl bg-amber-700'>
        {input}<button className='text-white p-3 text-3xl border rounded bg-red-900'>Delete Todo</button>
      </div>
    </div>
  )
}

export default Todo;
