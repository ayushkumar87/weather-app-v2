import React, { useRef, useState } from 'react'

const StudentRegForm = () => {
  const inputReg = useRef(null)
  const inputName = useRef(null)
  const inputCgpa = useRef(null)
  const [data, setData] = useState([])

  const handleClick = () => {
    const newData = {
      Reg: inputReg.current?.value || '',
      Name: inputName.current?.value || '',
      Cgpa: inputCgpa.current?.value || ''
    }
    setData([newData, ...data])
    if (inputName.current) inputName.current.value = ''
    if (inputReg.current) inputReg.current.value = ''
    if (inputCgpa.current) inputCgpa.current.value = ''
  }

  return (
    <div>
      REGNO:<input type='number' placeholder="enter your registration number" ref={inputReg} /><br />
      NAME:<input type='text' placeholder='enter your name' ref={inputName} /><br />
      CGPA:<input type='number' placeholder='enter your cgpa' ref={inputCgpa} />
      <button onClick={handleClick}>Submit</button>

      {data.map((e, idx) => (
        <div key={idx}>
          <h1>Registration Number: {e.Reg}</h1>
          <h1>Name: {e.Name}</h1>  
          <h1>Cgpa: {e.Cgpa}</h1>
        </div>
      ))}
    </div>
  )
}

export default StudentRegForm
