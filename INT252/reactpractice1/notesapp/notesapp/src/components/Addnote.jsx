import React from 'react'
import { useState } from "react"

const Addnote = ({addNote}) => {

    const  [title, setTitle] = useState('')

    const [detail,setDetail]=useState('')

    function submithandler(e){
        e.preventDefault();
        addNote(title,detail)
        setTitle("")
        setDetail("")
    }

  return (
    <>
        <form onSubmit={submithandler} className='bg-gray-400 w-1/2 h-screen'>

            <h1 className='text-center text-2xl'>Add Notes</h1>

            <div className='flex flex-col items-center '>
                <input type="text" value={title} onChange={(e)=>{
                setTitle(e.target.value)
                }} className='bg-amber-100 rounded-2xl p-3 m-6'/>

                <textarea value={detail} onChange={(e)=>{
                setDetail(e.target.value)
                }} className='bg-amber-100 rounded-2xl p-3 m-6'/>

                <button className='bg-red-200 rounded p-3'>Add Note</button>
            </div>
            
            
        </form>


    </>
  )
}

export default Addnote
