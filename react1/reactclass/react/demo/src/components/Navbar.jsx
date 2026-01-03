import React from 'react'

const navbar = () => {
    
  return (
    <>
      <div className='flex'>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdin8F6NVtE7EceUvJPcBMZSx36_2M4tX-Q&s" className=''/>
        </div>
        <div className=''>
        <button className='p-4 text-2xl bg-blue-700 border space-x-4' >Home</button>
        <button className='p-4 text-2xl bg-blue-700'>About us</button>
        <button className='p-4 text-2xl bg-blue-700'>address</button>
        </div>
      </div>
        
     </>
  )
  
}

export default navbar;
