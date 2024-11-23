import React from 'react'

const Filter = () => {
    const arr = [1, 2, 3, 4, 5]
    const newArr = arr.filter((item) => item % 2 === 0)
    return (
        <div>
            Filter
            <p>{arr}</p>
            <p>{newArr}</p>
        </div>
    )
}

export default Filter