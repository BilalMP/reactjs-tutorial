import React from 'react'
import Child from './Child'

const Parent = () => {
    const userDetails = {
        name: "John Doe",
        age: 30
    }

    return (
        <div>
            <Child props={userDetails} />
        </div>
    )
}

export default Parent