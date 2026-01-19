import React, { useCallback, useMemo, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [fetchData, setFetchData] = useState([])
  const handleDelete = useCallback((id) => {
    axios
      .delete(`https://your-api-url/${id}`)
      .then(() => {
        setFetchData(prev => prev.filter(item => item.id !== id))
      })
  }, [])
  const renderedList = useMemo(() => {
    return fetchData.map(item => (
      <div
        key={item.id}
        className="flex justify-evenly items-center p-2"
      >
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.number}</p>
        <p>{item.password}</p>
        <div className="space-x-6">
          <button>Edit</button>
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
    ))
  }, [fetchData, handleDelete])
  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Number" />
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>

        <div>
          {renderedList}
        </div>
      </div>
    </>
  )
}

export default App
