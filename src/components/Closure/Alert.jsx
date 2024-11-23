import React from 'react'

const Alert = () => {
    const message = "Hello world"
    return (
        <div>
            <p>Alert</p>
            <button onClick={()=>alert(message)}>Click Me</button>
        </div>
    )
}

export default Alert