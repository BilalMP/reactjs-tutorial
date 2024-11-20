import React from 'react'

const Child = ({ name, age, address }) => {
    return (
        <div>
            <p>child</p>
            <p>My name is {name}</p>
            <p>My age is {age}</p>
            <p>I lived in {address}</p>
        </div>
    )
}

export default Child