import React, { useState } from 'react'

const State = () => {
    const [person, setPerson] = useState({ name: "Rahul", age: 25 })

    const personHandler = () => {
        setPerson({ ...person, age: person.age + 1 })
    }
    return (
        <div>
            State
            <p>Name {person.name}</p>
            <p>Age {person.age}</p>
            <button onClick={personHandler}>Click</button>
        </div>
    )
}

export default State