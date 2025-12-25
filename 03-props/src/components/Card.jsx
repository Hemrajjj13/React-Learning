import React from 'react'

const Card = (props) => {

    return (
    <div className='card'>
        <img src={props.src} alt='imag'/>
        <h1>{props.user}</h1>
        <p>{props.user} is an aspiring Full Stack Devloper.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card