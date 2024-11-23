import React from 'react'

const Splice = () => {
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // At position 2, add "Lemon" and "Kiwi":
    fruits.splice(2, 0, "Lemon", "Kiwi");

    return (
        <div>
            Splice
            <p>{fruits}</p>
        </div>
    )
}

export default Splice