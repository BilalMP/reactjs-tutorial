import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    const updateCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            Counter
            <p>{count}</p>
            <button onClick={updateCount}>Click</button>
        </div>
    )
}

export default Counter