import React from 'react'

const Spread = () => {
    const arr = [1, 2, 3]
    const newArr = [...arr, 4]
    return (
        <div>
            <p>Spread</p>
            <p>{arr}</p>
            <p>{newArr}</p>
        </div>
    )
}

export default Spread