import React from 'react'
import { useState } from 'react'

const Forminp = ({addtask}) => {
    const [title,addtitle]=useState('')
    const [desc,adddesc]=useState('')

    function handlesubmit(e){
        e.preventDefault();
        addtask(title,desc)
        addtitle("")
        adddesc("")

    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Eneter the task' value={title} onChange={(e)=>{addtitle(e.target.value)}}/>
            <input type="text" placeholder='Enter task desc' value={desc}  onChange={(e)=>{adddesc(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Forminp
