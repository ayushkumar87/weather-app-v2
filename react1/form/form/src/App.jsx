import React, { useState } from 'react'
import Form from './components/Form'
import MyContext from './components/MyContext'

const App = () => {
  let [data,setData]=useState([])
  function handleAdd(e){
    setData(old=>[e,...old])
  }
  function handleDelete(e){
    setData((data)=>data.filter((value,index) =>e !== index))
  }
  return (
    <div>
      <MyContext.Provider value={{handleAdd,handleDelete,data}}>
        
         <Form/>
      </MyContext.Provider>
    </div>
  )
}

export default App
