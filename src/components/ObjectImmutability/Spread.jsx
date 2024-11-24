import React from 'react'

const Spread = () => {
    const person = { name: "Rahul", age: 25 }
    const newPerson = { ...person, age: 26 }
    return (
        <div>
            Spread
            <p>{person.name} {person.age}</p>
            <p>{newPerson.name} {newPerson.age}</p>
        </div>
    )
}

export default Spread