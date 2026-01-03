// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const[count,setCount]=useState(0)
//   function inccount(){
//     setCount(count+1)
//   }
//   function deccount(){
//     if(count==0){
//       setCount(count-1)
//     }
//     setCount(count-1)
//   }
//   return (
//     <div>
//        <p>{count}</p>
//        <button onClick={inccount}>Inc</button>
//        <button onClick={deccount}>Dec</button>
//     </div>
    
//   )
// }

// export default App


// import React, { useState, useEffect } from 'react';
// import TimerCounter from './component/TimerCounter';

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count is ${count}`;
//   }, [count]);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <TimerCounter/>
//     </div>
//   );
// };
// export default App;


// import React from 'react'
// import FormWithValidation from './component/FormWithValidation'

// const App = () => {
//   return (
//     <div>
//       <FormWithValidation/>
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// CopyRun
// function App() {
//   const [users, setUsers] = useState([]); // State to store data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data); // Save data in state
//         setLoading(false); // Data loaded
//       } catch (err) {
//         setError('Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Render logic
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [users, setUsers] = useState([]); // State for data

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       setUsers(response.data); // Save data in state
//     } catch (err) {
//       alert('Error fetching data');
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Show Users</button>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
  )
}

export default App;


