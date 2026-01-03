import React from 'react'

const Formoup = ({task,deletetask}) => {
  return (
    <>
    <div>
        {task.map(function(elm,idx){
            return (
                <div key={idx} className='flex gap-10'>
                    <h2>{idx+1}</h2>
                    <h1>{elm.title}</h1>
                    <p>{elm.desc}</p>
                    <button onClick={()=>{deletetask(idx)}}>Delete</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Formoup
