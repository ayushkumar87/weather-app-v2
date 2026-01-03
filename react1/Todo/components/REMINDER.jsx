import React, { useRef,useState } from 'react'
const REMINDER = () => {
            let inputData=useRef()
            let [data,setData]=useState([])
            function handleClick(){
                setData([inputData.current.value,...data])
                inputData.current.value="";
            }

  return (
    <>
    <div>
      <input type="text" ref={inputData} className='bg-blue-300 text-white'/>
       <button onClick={handleClick}>Add Reminder</button>
       {data.map((e)=>(
        <div>{e}</div>))}
    </div>
    </>
  )
}

export default REMINDER
