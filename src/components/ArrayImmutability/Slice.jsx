import React from 'react'

const Slice = () => {
    const array = [1, 2, 3, 4, 5]
    const array2 = array.slice(1, 4)
    return (
        <div>
            Slice
            <p>{array}</p>
            <p>{array2}</p>
        </div>
    )
}

export default Slice