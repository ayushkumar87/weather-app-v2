import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>hi my name is {props.user} and age is {props.age} 
        </p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card
