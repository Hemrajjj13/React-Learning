const Card = () => {

    const user = 'Hemraj'
    const age = 23

  return (
    <div className='card'>
        <h1>{user}</h1>
        <h2>and I am {age} year old</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut aut minus officia ipsum asperiores esse, expedita impedit fugiat accusamus sequi odio perferendis, placeat facilis quia necessitatibus tempore ducimus eius!</p>
    </div>
  )
}

export default Card