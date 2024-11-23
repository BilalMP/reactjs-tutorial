import React from 'react'

const Concat = () => {
    const array = [1, 2, 3, 4, 5]
    const array2 = [6, 7, 8, 9, 10]
    const array3 = array.concat(array2)
    return (
        <div>
            Concat
            <p>{array}</p>
            <p>{array2}</p>
            <p>{array3}</p>
        </div>
    )
}

export default Concat