import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(count+1);
    }
    function handleDec() {
        if (count <=0 ) return 0;
        setCount(count-1);
    }
    return (
    <div>
        <button onClick={handleDec}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
    )
}

export default Counter