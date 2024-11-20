// conditional rendering
import React from 'react'

const Conditional = () => {
    const isLoggedOn = true

    return (
        <div>
            {
                isLoggedOn ? <h1>Logged In</h1> : <h1>Not Logged In</h1>
            }
        </div>
    )
}

export default Conditional