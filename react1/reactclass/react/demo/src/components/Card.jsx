import React from 'react';
// import Navbar from "./components/Navbar.jsx";
const Card=({data4})=> {  
  return (
    <>
     <div className='border p-3 text-center text-2xl'>

    
     <div>
      <img src={data4.url} alt="" className='w-60 mx-auto'/>
     </div>
     <h1>{data4.title}</h1>
     <p>{data4.desc}</p>
    </div>
    </>
  );
}

export default Card;
