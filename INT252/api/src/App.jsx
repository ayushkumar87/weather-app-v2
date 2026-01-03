// import React, { useState } from 'react'

// const App = () => {
//   let [inputName,setInputName]= useState()
//   let [email,setEmail]= useState()
//   let [inputNum,setInputNum]= useState()
//   let [pass,setPass]= useState()
//   let [fetchData,setfetchData]=useState([])

//     useEfect(()=>{
//       axios.get('https://69390b19c8d59937aa0641e1.mockapi.io/:endpoint')
//       .then((res)=>setfetchData((old)=>[...old,...res.data]))
//     },[])

//   let onSubmit = (e) => {
//     e.preventDefault()
   
//      let data={
//         name:inputName,
//         email:email,
//         number:inputNum,
//         password:pass
//      }
//       axios.post('https://69390b19c8d59937aa0641e1.mockapi.io/:endpoint',data)
//       // .then((res)=>setfetchData((old)=>[...old,res.data]))
//       // console.log(data)
//   }

//   return (
//     <>
//     <div >
//       <form className='m-3 p-3 bg-amber-700 text-white' onSubmit={onSubmit}>
//         <input type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} placeholder="enter name" required/>
//         <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email" required/>
//         <input type="number" value={inputNum} onChange={(e)=>{setInputNum(e.target.value)}} placeholder="enter number" required/>
//         <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="enter password" required/>
//         <input type="submit" value="submit" />
//       </form>
//       <div>{data.Name}</div>
//       <div>{data.email}</div>
//       <div>{data.password}</div>
//       <div>{data.id}</div>
//     </div>
//     </>
//   )
// }

// export default App

// No additional code required here — the main App component and imports are defined below.

import axios from 'axios';
import React, { useState, useEffect } from 'react'

const App = () => {
  let [inputName, setInputName] = useState();
  let [inputEmail, setInputEmail] = useState();
  let [inputNumber, setInputNumber] = useState();
  let [inputPassword, setInputPassword] = useState();
  let [fetchData, setfetchData] = useState([]);
 
  useEffect(() => {
    axios.get("https://69390a87c8d59937aa063eab.mockapi.io/Example").then((res)=> setfetchData( (old) => [...old, ...res.data] ))
  }, []);

  let onSubmit=(e)=>{
    e.preventDefault();
    // if(!inputName ){
    //   alert("error in input field")
    // }else if(!inputEmail || !inputEmail.includes("@")){
    //   alert("Email is required")
    // }else if(!inputNumber || inputNumber.length !=10){
    //   alert("enter valid number")
    // }else if(!inputPassword ){
    //   alert("Check your password")
    // }else{
    //   alert("Form submitted successfully")
    // }
    let data = {
      name: inputName,
      email: inputEmail,
      number: inputNumber,
      password: inputPassword
    }
    axios.post("https://69390a87c8d59937aa063eab.mockapi.io/Example",data).then((res)=> console.log(res.data))
  }

  return (
    <div>
      <form onSubmit={(e)=>{onSubmit(e)}} className='bg-gray-300 p-10 flex justify-center m-3 gap-10 text-black' action="">
        <input required type="text" onChange={(e)=>{setInputName(e.target.value)}} value={inputName} placeholder='enter your name' className='border p-2 m-2 rounded-xl' />
        <input required type="email" onChange={(e)=>{setInputEmail(e.target.value)}} value={inputEmail} placeholder='enter your email' className='border p-2 m-2 rounded-xl' />
        <input required type="tel" onChange={(e)=>{setInputNumber(e.target.value)}} value={inputNumber} placeholder='enter your number' className='border p-2 m-2 rounded-xl' />
        <input required type="password" onChange={(e)=>{setInputPassword(e.target.value)}} value={inputPassword} placeholder='enter your password' className='border p-2 m-2 rounded-xl' />
        <button className='border p-2 m-2 rounded-xl'>submit</button>
      </form>
      <div>
        {inputName}<br/>
        {inputEmail}<br/>
        {inputNumber}<br/>
        {inputPassword}<br/>
      </div>
      <div className='p-10'>
        {fetchData.map((item) => (
          <div key={item.id} className='border p-2 m-2'>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Number:</strong> {item.number}</p>
            <p><strong>Password:</strong> {item.password}</p>
            <p><strong>ID:</strong> {item.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App