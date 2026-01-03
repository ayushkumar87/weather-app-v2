import React from 'react'

const Increment = ({count,inc}) => {
  return (
    
      <div className="bg-green-200 p-10 rounded text-center">
      <h1 className="text-2xl font-bold">Increment Counter</h1>
      <h2 className="text-4xl font-bold my-4">{count}</h2>
      <button
        onClick={inc}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Increment
      </button>
    </div>
    
  )
}

export default Increment
