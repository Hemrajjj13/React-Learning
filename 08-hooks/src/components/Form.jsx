import React, { useState } from 'react'

const Form = () => {
    const [title, setTitle] = useState('');
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Form Submitted by", title)
        setTitle('')
    }
  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
            <input
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                type='text' 
                placeholder='Enter your name' 
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form