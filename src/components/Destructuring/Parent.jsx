import React from 'react'
import Child from './Child'

const Parent = () => {

    const props = {
        name: "John Doe",
        age: 30,
        address: "London"
    }

    return (
        <div>
            <p>Parent</p>
            <Child {...props} />
        </div>
    )
}

export default Parent