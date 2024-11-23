import React from 'react'

const Operator = () => {
    const isLoggedIn = true;

    return (
        <div>
            Operator
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default Operator

const Greeting = (props) => {
    return (
        <p>
            {props.isLoggedIn && 'hello world'}
        </p>
    )
}