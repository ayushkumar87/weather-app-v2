import React from 'react'

const Decrement = ({count,dec}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Decrement Counter</h1>
      <h2 className="text-4xl font-bold my-4">{count}</h2>
      <button
        onClick={dec}
        className="bg-red-600 text-white px-6 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  )
}

export default Decrement
