import React from 'react'

const Assign = () => {
    const person = { name: "Rahul", age: 25 }
    const newPerson=Object.assign({}, person, { age: 26 })
    return (
        <div>
            Assign
            <p>{person.name} {person.age}</p>
            <p>{newPerson.name} {newPerson.age}</p>
        </div>
    )
}

export default Assign