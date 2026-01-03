import React, { useState } from 'react'

const Imginp = ({addtask}) => {
    const [title,settitle]=useState("")
    function addimg(){
        addtask(title)
        settitle("")
    }
  return (
    <div>
      <input type="text" value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <button onClick={addimg}>add</button>
    </div>
  )
}

export default Imginp
