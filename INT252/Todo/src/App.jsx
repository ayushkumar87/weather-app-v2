import { useState } from 'react'
// import REMINDER from '../components/REMINDER'
import StudentRegForm from '../components/StudentRegForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <StudentRegForm/>
    </>
  )
}

export default App
