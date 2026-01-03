import React, { useContext, useRef } from 'react'
import MyContext from './MyContext'

const FormInput = ( ) => {
  let {handleAdd} = useContext(MyContext)
    let inputName=useRef()
    let inputRegno=useRef()
    let inputCgpa=useRef()
    
    function handleClick(){
      let newdata={
      name: inputName.current.value,
      regno: inputRegno.current.value,
      cgpa:  inputCgpa.current.value
      }
        handleAdd(newdata)
        inputData.current.value=""
        inputRegno.current.value=" "
        inputCgpa.current.value=" "

    }

  return (
    <div className='bg-amber-800 text-white text-3xl p-3 text-center space-x-8 border-black'>

      <input ref={inputName} type="text" className='p-3 bg-blue border-2 border-black' />
      <input ref={inputRegno} type="text" className='p-3 bg-blue border-2 border-black'/>
      <input ref={inputCgpa} type="number" className='p-3 bg-blue border-2 border-black'/>
      <button onClick={handleClick} className='bg-blue-300 border p-4 rounded bg-slate-700'>Click to add</button>

    </div>
  )
}

export default FormInput





