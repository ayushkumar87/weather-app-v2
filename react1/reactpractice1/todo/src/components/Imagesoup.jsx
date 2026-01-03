import React from 'react'

const Imagesoup = ({task,deletetask}) => {
  return (
    <>
    <div>
        {task.map(function(ele,idx){
            return(
                <div key={idx}>
                    <img src={ele}/>
                    <button onClick={()=>deletetask(idx)}>Delete</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Imagesoup
