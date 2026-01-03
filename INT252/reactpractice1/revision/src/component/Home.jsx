import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const gotoabout=()=>{
        navigate('/about')
    }
     const goWithParams = () => {
    navigate('/about?name=John&age=30');
    };

    const goWithState=()=>{
        navigate('/about',{state:{userID: 1,name1:'Alice'}});
    }
  return (
      <>
      
      
      <div>
      <h1>Home</h1>
      <Link to="/about">Go to about</Link>
    </div>
    <button onClick={gotoabout}>Go to about</button>

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(+1)}>Next</button>
      
      <button onClick={goWithParams}>Go with Query Params</button>
      
      <button onClick={goWithState}>Go with State</button>
      </>

  )
}

export default Home
