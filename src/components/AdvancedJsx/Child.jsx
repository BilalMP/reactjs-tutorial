import React from 'react'

const Child = ({props}) => {
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>My age is {props.age}</p>
        </div>
    )
}

export default Child