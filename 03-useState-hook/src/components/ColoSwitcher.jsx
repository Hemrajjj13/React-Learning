import React from 'react'
import { useState } from 'react'

const ColoSwitcher = () => {
    const [color, setColor] = useState('#000000');

    const generateColor = () => {
        const randomColor = '#' +   Math.floor(Math.random() * 16777215).toString(16);
        
        setColor(randomColor)
    }

    

  return (
    <div style={{
        height: "500px",
        width: "500px",
        alignItems: "center",
        border: "2px solid white",
        display: "flex",
        justifyContent: "center",
        flexDirection:'column'
    }}>
        <div id='color-div' style={{
            height: "150px",
            width: "200px",
            backgroundColor: color,
            border: "2px solid gray"
        }}>{color}</div>
        <button onClick={generateColor}>Change Color</button>
    </div>
  )
}

export default ColoSwitcher