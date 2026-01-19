import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location=useLocation();
    // console.log(location)
    // const parms=new URLSearchParams(location.search)
    // const name=parms.get('name');
    // const age=parms.get('age')
    


    const { userID, name1 } = location.state || {}
    
  return (
    <div>
      About us
      {/* <p>{name}</p>
      <p>{age}</p> */}

      <p>{userID}</p>
      <p>{name1}</p>

    </div>
  )
}

export default About
