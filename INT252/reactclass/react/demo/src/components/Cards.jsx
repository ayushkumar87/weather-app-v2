import React from 'react';
import Card from './card';
const Cards = ({porps}) => {
  return (
    <>
        <div className='grid grid-cols-3 p-4'>

       
        <Card data={porps[0]}></Card>
        <Card data={porps[1]}></Card>
        <Card data={porps[2]}></Card>
     

      
      </div>
    </>
    
  )
}

export default Cards;
