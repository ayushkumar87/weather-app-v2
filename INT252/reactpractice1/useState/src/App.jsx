// 1:-
// import React, { useState } from 'react'

// const { useEffect } = require("react")

// const App = () => {
//   const [title,setTitle]=useState('')
//   const submitHandler=(e)=>{
//     e.preventDefault()
//     console.log('form submited')
//     setTitle('')
//   }
//   return (
//     // <div>
//     //   <form onSubmit={(e)=>{
//     //   submitHandler(e);
//     //   }}>
//     //     <input type="text" placeholder='Enter your given text'
//     //       value={title}
//     //       onChange={(e)=>{
//     //         setTitle(e.target.value)
//     //       }}
//     //     />
//     //     <button>Submit</button>
//     //   </form>
//     // </div>

//   )
// }

// export default App


// 2nd:-
// import { useState } from 'react'
// const App = () => {

//   const [title, setTitle] = useState('')
//   const [details, setDetails] = useState('')
//   const [task, setTask] = useState([])

//   const submitHandler = (e) => {
//     e.preventDefault()

//     const copyTask = [...task]
//     copyTask.push({ title, details })
//     setTask(copyTask)

//     setTitle('')
//     setDetails('')
//   }

//   const deleteNote = (idx) => {
//     const copyTask = [...task]
//     copyTask.splice(idx, 1)
//     setTask(copyTask)
//   }

//   return (
//     <div className="container">

//       <form onSubmit={submitHandler} className="form">
//         <h1>Add Notes</h1>

//         <input
//           type="text"
//           placeholder="Enter Notes Heading"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <textarea
//           placeholder="Write Details here"
//           value={details}
//           onChange={(e) => setDetails(e.target.value)}
//         />

//         <button>Add Note</button>
//       </form>

//       <div className="notes-section">
//         <h1>Recent Notes</h1>
//         <div className="notes-container">
//           {task.map((elem, idx) => (
//             <div key={idx} className="note">
//               <div>
//                 <h3>{elem.title}</h3>
//                 <p>{elem.details}</p>
//               </div>
//               <button onClick={() => deleteNote(idx)} className="delete-btn">
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App


// 3:-

// import React, { useState } from 'react'
// import axios from 'axios'
// const App = () => {

//     const [data,setData]=useState([])

  // async function getData(){
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData=async ()=>{
    // without destructuring
    // const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response.data)

    //with destructuring
    // const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(data)

    // const response=await axios.get('https://picsum.photos/v2/list')
    // setData(response.data)
      // console.log(response)

  // }

//   return (
//     <>
//     <div>
//       <button onClick={getData}>Get data</button>
//       <div>
//         {data.map((elem,idx)=>{
//           return <h3>Hello ,{elem.author}{idx}</h3>
//         })}
//       </div>
//     </div>
//     </>
//   )
// }

// export default App


// 4:-
// use of useEffect
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num,setNum]=useState(0)
//   const [num2,setNum2]=useState(100)

//   useEffect(function(){
//     console.log('use effect is running')
//   },[num])
//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>

//       <button 
//       onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10)
//       }}
//       >
//        Hover
//       </button>
//     </div>
//   )
// }

// export default App



// 5:use of api and Card.jsx
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Card from './components/Card'

// const App = () => {
//   const [userData, setUserData] = useState([])
//   const [index, setIndex] = useState(1)

//   const getData = async () => {
//     const response = await axios.get(
//       `https://picsum.photos/v2/list?page=${index}&limit=10`
//     )
//     setUserData(response.data)
//   }

//   useEffect(() => {
//     getData()
//   }, [index])

//   let printUserData = <h3>Loading...</h3>

//   if (userData.length > 0) {
//     printUserData = userData.map((elem, idx) => (
//       <div key={idx}>
//         <Card elem={elem}/>
//       </div>
//     ))
//   }

//   return (
//     <div>
//       <div>
//         {printUserData}
//       </div>

//       <div>
//         <button
//           disabled={index === 1}
//           onClick={() => {
//             if (index > 1) {
//               setIndex(index - 1)
//               setUserData([])
//             }
//           }}
//         >
//           Prev
//         </button>

//         <span> Page {index} </span>

//         <button
//           onClick={() => {
//             setUserData([])
//             setIndex(index + 1)
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App



// 6:-routing
// Routing means deciding which page or component to show based on the URL.

// In simple words 👇

// Routing is like a map for your app:

// URL changes 👉 different page loads

// All without refreshing the browser (in React)
//types of router

// 1:-BrowserRouter:-
//BrowserRouter is a component from react-router-dom that enables routing using the browser’s URL.
// Simple definition 👇
// BrowserRouter uses the browser’s history API to keep the UI in sync with the URL.
// In short:
// 🔹 It lets React show different pages without reloading the browser.

//2:-HashRouter:-
// HashRouter is a router in react-router-dom that uses the URL hash (#) to manage navigation.
// Simple definition 👇
// HashRouter keeps routing information after the # symbol in the URL.
// Example 
// URL:
// http://localhost:3000/#/about

// 3:-Memory Router
// MemoryRouter is a router in react-router-dom that stores routing history in memory, not in the browser 
// URL.
// Simple definition 👇
// MemoryRouter keeps navigation history in memory and does not change the URL.
// So when you navigate, the address bar stays the same.


// 4:-Static Router
// StaticRouter is a router in react-router-dom used for server-side rendering (SSR).
// Simple definition 👇
// StaticRouter renders routes based on a fixed location instead of listening to browser URL changes.
// It does not use browser history.

// to use this we need to wrap the parent of app.jsx which is main.jsx in BrowserRouter
//after this we need to make the routes 

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
