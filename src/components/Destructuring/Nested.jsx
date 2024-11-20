import React from 'react'

const Nested = ({ user }) => {
    const { name, age, address: { city, state } } = user;
    return (
        <div>
            <p>Nested</p>
            <p>My Name is{name}</p>
            <p>My age is{age}</p>
            <p>My address is{city}, {state}</p>
        </div>
    )
}

export default Nested