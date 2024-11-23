import React, { useState } from 'react'

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue)
    return [count, () => setCount(count + 1)]
}

const CustomHook = () => {
    const [count, increment] = useCounter(0)
    return (
        <div>
            <p>Custom Hook</p>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CustomHook