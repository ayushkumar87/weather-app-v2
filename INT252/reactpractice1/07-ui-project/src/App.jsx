import React, { useState } from 'react'

const App = () => {
  const [title,settitle]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted by: ",title)

    settitle('')
  }

  return (
    <div className='bg-black h-screen'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-3  border-2 border-white'>

       <input type="text" className='border-black text-white bg-gray-800 m-5' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>

        <button className='border-2 border-black text-white bg-gray-700 p-3'>Submit</button>

      </form>
    </div>
  )
}

export default App
