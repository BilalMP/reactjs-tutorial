import React, { useState } from 'react'

const State = () => {

    const [name, setName] = useState('John Doe')

    const nameHandler = () => {
        setName("Jimmy")
    }
    return (
        <div>
            <p>State</p>
            <p>My name is {name}</p>
            <button onClick={nameHandler}>Click</button>
        </div>
    )
}

export default State