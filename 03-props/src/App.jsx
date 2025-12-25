import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sarthak' src='https://images.unsplash.com/photo-1708559348128-3cde89847e2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Hemraj' src='https://images.unsplash.com/photo-1752606402425-fa8ed3166a91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Sanket' src='https://images.unsplash.com/photo-1740638733796-99124a3b0a4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Rahul' src='https://images.unsplash.com/photo-1755263087492-c9f3cd4d2ced?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Akash' src='https://unsplash.com/photos/abstract-pattern-of-transparent-organic-shapes-on-black-r7ByDF1e46M'/>

    </div>
  )
}

export default App