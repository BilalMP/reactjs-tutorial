import React from 'react'

const Map = () => {
    const arr = [1, 2, 3, 4, 5]
    const newArr = arr.map((item) => item * 2)
    return (
        <div>
            Map
            <p>{arr}</p>
            <p>{newArr}</p>
        </div>
    )
}

export default Map