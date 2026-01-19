import React from 'react'

const NotesList = (task,deleteNode) => {
  return (
    <>
    <div className='bg-amber-300 w-1/2  border-2 h-fit'>
       <h1 className='text-black text-2xl text-center'>Recent Nodes are</h1>
        <div className='flex flex-wrap'>
            {task.map(function(elm,idx){
                return(
                 <div key={idx} className='bg-amber-950 border-2 border-solid border-black h-fit w-[30%] p-3 m-3 '>
                    <div >
                    <h2 className='text-white'>{idx+1}</h2>
                    <h3 className='text-white'>{elm.title}</h3>
                    <p className='text-white'>{elm.detail}</p>
                    </div>
                    <button onClick={()=>{
                        deleteNode(idx)
                    }} className='text-white bg-red-700 p-3'>delteNode</button>
                </div>
            )})}
        </div>
    </div>
    </>

  )
}

export default NotesList
